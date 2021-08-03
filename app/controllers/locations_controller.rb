class LocationsController < ApplicationController
    def index
        locations = Location.all
        render json: locations
    end

    def create
        location = Location.find_by(name: params[:name])

        if location
            render json: location
        else
            new_location = Location.create(location_params)
        render json: new_location, status: 201
        end

    end

    private

    def location_params
        params.permit(:name, :address, :city, :category)
    end
end


# , :img_url, :description, :hours, :groups, :outdoor, :date