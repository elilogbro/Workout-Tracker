class WorkoutSetsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :invalid_record_error
    
    skip_before_action :authorize 

    def index
        render json: WorkoutSet.all, status: :ok
    end

    def show
        workout_set = WorkoutSet.find(params[:id])
        render json: workout_set, status: :ok
    end

    def create
        workout_set = WorkoutSet.create!(workout_set_params)
        render json: workout_set, status: :created
    end

    private

    def workout_set_params
        params.permit(:exercise_id, :weight, :reps)
    end
    
    def invalid_record_error(error)
        render json: {error: error.message}, status: :unprocessable_entity
    end
end
