Rails.application.routes.draw do
  resources :coasters
  resources :parks
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  resources :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
 
resources :parks
resources :coasters
# For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
