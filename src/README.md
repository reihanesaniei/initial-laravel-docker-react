All versions sample program
---
- laravel 9.26.1
- docker  version 20.10.12,
- mysql  Ver 5.7.22 for Linux on x86_64 (MySQL Community Server (GPL))
- php 8.1.9
- composer 2.4.1 2022-08-20 11:44:50
- node v18.8.0
- npm 8.18.0
-----
#project Social network
#tables

users:
- id
- name
- email
- mobile
- score
- admin_flag
- active

articles:
- id
- user_id
- title
- content
- topic
- source
- image
- video
- view_count
- like_count
- active

// I suppose when user logged in , he can write comment

comments:
- id
- news_id
- user_id
- content
- active

reply_comments:
- id
- user_id
- news_id
- comment_id
- content
- active

channels:
- id
- user_id
- title
- slug
- active

threads:
- id
- user_id
- channel_id
- title
- content
- slug
- active

answer_threads:
- id
- user_id
- channel_id
- thread_id
- content
- active


