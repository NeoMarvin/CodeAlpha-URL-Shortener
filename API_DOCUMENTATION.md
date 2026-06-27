# API Documentation

## Base URL

```
http://localhost:5000
```

---

# Authentication

This API does not require authentication.

---

# Endpoints

## 1. Create Short URL

**Endpoint**

```http
POST /api/urls
```

### Request Body

| Field | Type | Required | Description |
|------|------|----------|-------------|
| originalUrl | String | Yes | Original URL to shorten |
| shortCode | String | No | Custom short code |
| expiresAt | Date | No | Expiration date |

### Example Request

```json
{
    "originalUrl": "https://google.com"
}
```

### Custom Short Code

```json
{
    "originalUrl": "https://google.com",
    "shortCode": "marvin"
}
```

### Expiring URL

```json
{
    "originalUrl": "https://google.com",
    "expiresAt": "2026-12-31T23:59:59Z"
}
```

### Success Response

**201 Created**

```json
{
    "success": true,
    "message": "Short URL Created",
    "data": {
        "originalUrl": "https://google.com",
        "shortCode": "BnIrd2L",
        "clicks": 0
    }
}
```

---

## 2. Get All URLs

**Endpoint**

```http
GET /api/urls
```

### Success Response

**200 OK**

```json
{
    "success": true,
    "data": [
        {
            "originalUrl": "https://google.com",
            "shortCode": "BnIrd2L",
            "clicks": 5
        }
    ]
}
```

---

## 3. Redirect URL

**Endpoint**

```http
GET /:shortCode
```

### Example

```http
GET /BnIrd2L
```

### Success Response

Redirects the user to the original URL.

### Possible Errors

- 404 Short URL not found
- 410 URL has expired

---

## 4. Delete URL

**Endpoint**

```http
DELETE /api/urls/:shortCode
```

### Example

```http
DELETE /api/urls/BnIrd2L
```

### Success Response

**200 OK**

```json
{
    "success": true,
    "message": "URL deleted"
}
```

---

# HTTP Status Codes

| Code | Description |
|------|-------------|
| 200 | OK |
| 201 | Created |
| 400 | Bad Request |
| 404 | Not Found |
| 409 | Conflict |
| 410 | Gone |
| 500 | Internal Server Error |

---

# Error Response Format

```json
{
    "success": false,
    "message": "Error message"
}
```