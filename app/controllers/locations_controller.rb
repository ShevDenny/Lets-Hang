class LocationsController < ApplicationController
    def index
        locations = Location.all
        render json: locations
    end

    def create
        location = Location.create(location_params)

        if location.valid?
            render json: location, status: 201
        else           
            render json: {errors: location.errors.full_messages}, status: :unprocessable_entity
        end
    end

    private

    def location_params
        params.permit(:name, :address, :city, :category, :img_url)
    end
end


# , :img_url, :description, :hours, :groups, :outdoor, :date