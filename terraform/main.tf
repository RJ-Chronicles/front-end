provider "aws" {
  region = "ap-south-1"  # change to your preferred region
}

resource "aws_s3_bucket" "react_website" {
  bucket = var.bucket_name

  website {
    index_document = "index.html"
    error_document = "404.html"
  }

  tags = {
    Project = "ReactWebsite"
  }
}

resource "aws_s3_bucket_policy" "allow_public_access" {
  bucket = aws_s3_bucket.react_website.id

  policy = jsonencode({
    Version = "2012-10-17",
    Statement = [
      {
        Effect    = "Allow",
        Principal = "*",
        Action    = "s3:GetObject",
        Resource  = "${aws_s3_bucket.react_website.arn}/*"
      }
    ]
  })
}

resource "aws_s3_bucket_website_configuration" "static_website" {
  bucket = aws_s3_bucket.react_website.id

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "404.html"
  }
}
