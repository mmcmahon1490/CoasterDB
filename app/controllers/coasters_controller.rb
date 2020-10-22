class CoastersController < ApplicationController
  before_action :set_coaster, only: [:show, :update, :destroy]
  # before_action :authorize_request, only: [:create, :update, :destroy]

  # GET /coasters
  def index
    @coasters = Coaster.all

    render json: @coasters
  end

  # GET /coasters/1
  def show
    render json: @coaster
  end

  # POST /coasters
  def create
    @coaster = Coaster.new(coaster_params)

    if @coaster.save
      render json: @coaster, status: :created
    else
      render json: @coaster.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /coasters/1
  def update
    if @coaster.update(coaster_params)
      render json: @coaster
    else
      render json: @coaster.errors, status: :unprocessable_entity
    end
  end

  # DELETE /coasters/1
  def destroy
    @coaster.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_coaster
      @coaster = Coaster.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def coaster_params
      params.require(:coaster).permit(:name, :make, :model, :height, :speed, :inversions, :park_id)
    end
end
