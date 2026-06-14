#!/bin/sh

mc alias set local \
http://goopsy-minio:9000 \
goopsyadmin \
Goopsy@2026Storage

mc mb local/product-images --ignore-existing

mc mb local/dealer-kyc --ignore-existing

mc mb local/repair-media --ignore-existing

mc mb local/chat-media --ignore-existing

mc mb local/invoice-pdfs --ignore-existing

mc mb local/customer-profiles --ignore-existing

mc mb local/admin-assets --ignore-existing