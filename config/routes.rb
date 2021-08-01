Rails.application.routes.draw do
  
  resources :locations, only: [:index, :create]
  resources :users, only: [:show]
  resources :user_events
  resources :events
  resources :fav_locations
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  post "/signup", to: "users#create"
  # resources :sessions, only: [:create, :destroy]
  # delete "/logout", to: "sessions#destroy"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
