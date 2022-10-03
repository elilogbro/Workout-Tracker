class ExercisesController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :invalid_record_error

    def index
        render json: Exercise.all, status: :ok
    end

    def create
        exercise = Exercise.create!(exercise_params)
        render json: exercise, status: :created
    end

    private

    def exercise_params
        params.permit(:name, :image, :muscle_group)
    end
    
    def invalid_record_error(error)
        render json: {error: error.message}, status: :unprocessable_entity
    end

end
