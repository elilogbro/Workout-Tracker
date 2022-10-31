class RoutinesController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :invalid_record_error

    def index
        render json: Routine.all, status: :ok
    end

    def show
        render json: Routine.find(params[:id]), status: :ok
    end

    def create
        routine = Routine.create!(routine_params)
        render json: routine, status: :created
    end

    def destroy
        routine = Routine.find(params[:id])
        routine.destroy
        render json: {}
        head :no_content
    end

    def update
        routine = Routine.find(params[:id])
        routine.update!(routine_params)
        render json: routine, status: :ok
    end

    private

    def routine_params
        params.permit(:user_id, :name)
    end

    def invalid_record_error(invalid)
        render json: {errors: invalid.record.errors}, status: :unprocessable_entity
    end

end
