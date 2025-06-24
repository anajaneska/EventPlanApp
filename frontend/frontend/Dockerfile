FROM node:18-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Step 2: Serve the app with a lightweight web server
FROM nginx:alpine

# Copy the build output to Nginx's public directory
COPY --from=build /app/build /usr/share/nginx/html

# Optional: replace default Nginx config
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

