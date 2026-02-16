import json
import os
import boto3
import base64
import uuid

def handler(event, context):
    """
    Загрузка изображения в S3 и возврат CDN URL
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
    image_data = body.get('image')
    filename = body.get('filename', 'image.jpg')
    
    file_extension = filename.split('.')[-1].lower()
    content_types = {
        'jpg': 'image/jpeg',
        'jpeg': 'image/jpeg',
        'png': 'image/png',
        'webp': 'image/webp',
        'gif': 'image/gif'
    }
    content_type = content_types.get(file_extension, 'image/jpeg')
    
    image_bytes = base64.b64decode(image_data)
    
    file_id = str(uuid.uuid4())
    key = f'products/{file_id}.{file_extension}'
    
    s3 = boto3.client(
        's3',
        endpoint_url='https://bucket.poehali.dev',
        aws_access_key_id=os.environ['AWS_ACCESS_KEY_ID'],
        aws_secret_access_key=os.environ['AWS_SECRET_ACCESS_KEY']
    )
    
    s3.put_object(
        Bucket='files',
        Key=key,
        Body=image_bytes,
        ContentType=content_type
    )
    
    cdn_url = f"https://cdn.poehali.dev/projects/{os.environ['AWS_ACCESS_KEY_ID']}/bucket/{key}"
    
    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({'url': cdn_url}, ensure_ascii=False)
    }
