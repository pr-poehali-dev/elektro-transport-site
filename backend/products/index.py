import json
import os
import psycopg2
from psycopg2.extras import RealDictCursor

def handler(event, context):
    """
    API для управления товарами: получить список, создать, обновить, удалить товар
    """
    
    if event.get('httpMethod') == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, X-User-Id, X-Auth-Token',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }
    
    conn = psycopg2.connect(os.environ['DATABASE_URL'])
    cur = conn.cursor(cursor_factory=RealDictCursor)
    
    method = event.get('httpMethod', 'GET')
    path = event.get('path', '')
    
    if method == 'GET':
        cur.execute("""
            SELECT id, name, category, price, old_price, image, images, 
                   max_speed, range, weight, power, brand, delivery_days, 
                   in_stock, description, specs, youtube_url, 
                   created_at, updated_at
            FROM products
            ORDER BY id
        """)
        products = cur.fetchall()
        
        result = []
        for p in products:
            result.append({
                'id': p['id'],
                'name': p['name'],
                'category': p['category'],
                'price': float(p['price']),
                'oldPrice': float(p['old_price']) if p['old_price'] else None,
                'image': p['image'],
                'images': p['images'],
                'maxSpeed': p['max_speed'],
                'range': p['range'],
                'weight': p['weight'],
                'power': p['power'],
                'brand': p['brand'],
                'deliveryDays': p['delivery_days'],
                'inStock': p['in_stock'],
                'description': p['description'],
                'specs': p['specs'],
                'youtubeUrl': p['youtube_url'],
                'createdAt': p['created_at'].isoformat() if p['created_at'] else None,
                'updatedAt': p['updated_at'].isoformat() if p['updated_at'] else None
            })
        
        cur.close()
        conn.close()
        
        return {
            'statusCode': 200,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': json.dumps(result, ensure_ascii=False)
        }
    
    elif method == 'POST':
        body = json.loads(event.get('body', '{}'))
        
        images = body.get('images', [])
        if not images and body.get('image'):
            images = [body['image']]
        
        cur.execute("""
            INSERT INTO products (name, category, price, old_price, image, images, 
                                max_speed, range, weight, power, brand, delivery_days, 
                                in_stock, description, specs, youtube_url)
            VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
            RETURNING id
        """, (
            body['name'],
            body['category'],
            body['price'],
            body.get('oldPrice'),
            body['image'],
            images,
            body['maxSpeed'],
            body['range'],
            body['weight'],
            body['power'],
            body['brand'],
            body['deliveryDays'],
            body.get('inStock', True),
            body['description'],
            json.dumps(body['specs']),
            body.get('youtubeUrl')
        ))
        
        product_id = cur.fetchone()['id']
        conn.commit()
        cur.close()
        conn.close()
        
        return {
            'statusCode': 201,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'id': product_id}, ensure_ascii=False)
        }
    
    elif method == 'PUT':
        body = json.loads(event.get('body', '{}'))
        product_id = body.get('id')
        
        images = body.get('images', [])
        if not images and body.get('image'):
            images = [body['image']]
        
        cur.execute("""
            UPDATE products 
            SET name = %s, category = %s, price = %s, old_price = %s, 
                image = %s, images = %s, max_speed = %s, range = %s, 
                weight = %s, power = %s, brand = %s, delivery_days = %s, 
                in_stock = %s, description = %s, specs = %s, youtube_url = %s,
                updated_at = NOW()
            WHERE id = %s
        """, (
            body['name'],
            body['category'],
            body['price'],
            body.get('oldPrice'),
            body['image'],
            images,
            body['maxSpeed'],
            body['range'],
            body['weight'],
            body['power'],
            body['brand'],
            body['deliveryDays'],
            body.get('inStock', True),
            body['description'],
            json.dumps(body['specs']),
            body.get('youtubeUrl'),
            product_id
        ))
        
        conn.commit()
        cur.close()
        conn.close()
        
        return {
            'statusCode': 200,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'success': True}, ensure_ascii=False)
        }
    
    elif method == 'DELETE':
        query_params = event.get('queryStringParameters', {}) or {}
        product_id = query_params.get('id')
        
        cur.execute("DELETE FROM products WHERE id = %s", (product_id,))
        conn.commit()
        cur.close()
        conn.close()
        
        return {
            'statusCode': 200,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'success': True}, ensure_ascii=False)
        }
    
    return {
        'statusCode': 405,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({'error': 'Method not allowed'}, ensure_ascii=False)
    }