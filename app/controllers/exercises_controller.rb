class ExercisesController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :invalid_record_error
    
    skip_before_action :authorize 

    def index
        render json: Exercise.all.uniq { |exercise| [exercise.name] }, status: :ok
    end

    def show
        exercise = Exercise.find(params[:id])
        render json: exercise, status: :ok
    end

    def create
        exercise = Exercise.create!(exercise_params)
        render json: exercise, status: :created
    end

    def update
        exercise = Exercise.find(params[:id])
        exercise.update!(exercise_params)
        render json: exercise, status: :ok
    end

    private

    def exercise_params
        params.permit(:name, :image, :muscle_group, :routine_id)
    end
    
    def invalid_record_error(invalid)
        render json: {errors: invalid.record.errors}, status: :unprocessable_entity
    end

end
