Rails.application.routes.draw do
  
  resources :locations, only: [:index, :create]
  resources :users, only: [:create]
  resources :user_events
  resources :events
  resources :fav_locations  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
