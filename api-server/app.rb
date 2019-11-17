require 'sinatra'
require 'sinatra/json'
require 'json'

set :bind, '0.0.0.0'

configure do
  enable :cross_origin
end

before do
  headers 'Access-Control-Allow-Origin' => '*'
end

options "*" do
  response.headers["Allow"] = "GET, PUT, POST, DELETE, OPTIONS"
  response.headers["Access-Control-Allow-Headers"] = "Authorization, Content-Type, Accept, X-User-Email, X-Auth-Token"
  response.headers["Access-Control-Allow-Origin"] = "*"
  200
end

get '/items' do
  data = File.read('./json/all.json')
  response = JSON.load(data)
  # Get value from params to filter `?category_id`
  category_id = params[:category_id].to_i
  if category_id > 0
    result = response['data'].select { |item| item['category_id'] === category_id }
  else
    result = response['data']
  end
  response = {"data" => result}
  json response, content_type: :js
end

get '/items/:id' do
  idx = params['id'].to_i - 1

  data = File.read('./json/all.json')
  response = JSON.load(data)

  json response['data'][idx], content_type: :js
end

get '/categories' do
  data = File.read('./json/categories.json')
  response = JSON.load(data)

  json response, content_type: :js
end

get '/not_found' do
  status 404
end
