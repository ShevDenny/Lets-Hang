class LocationsController < ApplicationController

    def index
        locations = Location.all
        render json: locations
    end

    def create
        # location = Location.find_by(name: params[:name])
        # if location
        #     render json: location
        # else
            new_location = Location.create(location_params)
            
            render json: new_location, status: :created
        # end
    end

    private

    def location_params
        params.permit(:name, :address, :city, :type)
    end
end
# , :img_url, :hours, :groups, :outdoors, :date)