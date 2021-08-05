Rails.application.routes.draw do
  
  resources :locations, only: [:index, :create]
  # resources :users, only: [:show]
  resources :user_events
  resources :events
  # resources :fav_locations, only: [:index]
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  post "/signup", to: "users#create"
  post "/fav_locations", to: "fav_locations#create"
  get "/fav_locations", to: "fav_locations#index"
  get "/fav_locations/:id", to: "fav_locations#show"
  post "/events", to: "events#create"
  get '/re_auth', to: 'sessions#re_auth'
  # resources :sessions, only: [:create, :destroy]
  # delete "/logout", to: "sessions#destroy"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
