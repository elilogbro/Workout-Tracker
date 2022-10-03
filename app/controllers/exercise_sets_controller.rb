class ExerciseSetsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :invalid_record_error
    rescue_from ActiveRecord::RecordNotFound, with: :not_found_error

    def index
        render json: ExerciseSet.all, status: :ok
    end

    def create
        exercise_set = ExerciseSet.create!(exercise_set_params)
        render json: exercise_set, status: :created
    end

    def update
        exercise_set = ExerciseSet.find(params[:id])
        exercise_set.update!(exercise_set_params)
        render json: exercise_set, status: :ok
    end

    def destroy
        exercise_set = ExerciseSet.find(params[:id])
        exercise_set.destroy
        render json: {}
        head :no_content
    end

    private

    def exercise_set_params
        params.permit(:routine_id, :exercise_id, :weight, :reps)
    end

    def invalid_record_error(error)
        render json: {error: error.message}, status: :unprocessable_entity
    end

    def not_found_error
        render json: {error: "Set not found"}, status: :not_found
    end

end
