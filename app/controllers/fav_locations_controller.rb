class FavLocationsController < ApplicationController
    # before_action :authorize

    # def index
    #     fav_locations = FavLocation.all
    #     render json: fav_locations
    # end

    def index
        fav_locations = FavLocation.where(user_id: @current_user.id)
        render json: fav_locations
    end

    def create
        
        location = Location.find_by(name: params[:name])
        id = 0

        if location
            id = location.id
            
        else
            new_location = Location.create(location_params)
            
            if new_location.valid?
                id = new_location.id
                # render json: new_location, status: 201
            else           
                render json: {errors: new_location.errors.full_messages}, status: :unprocessable_entity
            end
        end
        fav_location = FavLocation.create(user_id: @current_user.id, location_id: id)
        
        if fav_location.valid?
            render json: fav_location, status: 201
        else           
            render json: {errors: fav_location.errors.full_messages}, status: :unprocessable_entity
        end
    end

    private
    
    def location_params
        params.permit(:name, :address, :city, :category, :img_url)
    end

    # def fav_params
    #     {user_id: @current_user,
    #     location_id: location.id}
    # end

end
