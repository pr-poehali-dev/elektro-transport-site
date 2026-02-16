import json
import os
import psycopg2

def handler(event, context):
    """
    Миграция товаров из TypeScript в PostgreSQL
    """
    
    if event.get('httpMethod') == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }
    
    body = json.loads(event.get('body', '{}'))
    products_data = body.get('products', [])
    
    conn = psycopg2.connect(os.environ['DATABASE_URL'])
    cur = conn.cursor()
    
    inserted = 0
    for p in products_data:
        cur.execute("""
            INSERT INTO products (name, category, price, old_price, image, images, 
                                max_speed, range, weight, power, brand, delivery_days, 
                                in_stock, description, specs, youtube_url)
            VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
        """, (
            p['name'],
            p['category'],
            p['price'],
            p.get('oldPrice'),
            p['image'],
            p['images'],
            p['maxSpeed'],
            p['range'],
            p['weight'],
            p['power'],
            p['brand'],
            p['deliveryDays'],
            p.get('inStock', True),
            p['description'],
            json.dumps(p['specs']),
            p.get('youtubeUrl')
        ))
        inserted += 1
    
    conn.commit()
    cur.close()
    conn.close()
    
    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({'inserted': inserted}, ensure_ascii=False)
    }
