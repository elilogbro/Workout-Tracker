User.destroy_all
Routine.destroy_all
Exercise.destroy_all
ExerciseSet.destroy_all
#By default SQL String limit 255 character 
#Ex:- :limit => 40

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:
# ExerciseSetup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

u1 = User.create(name: "John White", age: 34, username: "johnbrown123", password: "JohnBrown10203")
u2 = User.create(name: "Betty White", age: 80, username: "bettywhite10203", password: "BettyWhite123")
u3 = User.create(name: "Eli Brown", age: 25, username: "elibrown123", password: "EliBrown10203")

r1 = Routine.create(user_id: u1.id, name: "Chest", date: 20221003, time: "11:05 AM")
r2 = Routine.create(user_id: u1.id, name: "Back", date: 20220809, time: "8:05 AM")
r3 = Routine.create(user_id: u1.id, name: "Shoulders", date: 20220114, time: "10:24 AM")
r4 = Routine.create(user_id: u1.id, name: "Arms", date: 20220323, time: "9:11 AM")
r5 = Routine.create(user_id: u1.id, name: "Legs", date: 20220219, time: "11:20 AM")
r6 = Routine.create(user_id: u2.id, name: "Upper Body 1", date: 20221003, time: "3:05 PM")
r7 = Routine.create(user_id: u2.id, name: "Lower Body 1", date: 20220809, time: "7:27 PM")
r8 = Routine.create(user_id: u2.id, name: "Upper Body 2", date: 20220114, time: "5:15 PM")
r9 = Routine.create(user_id: u2.id, name: "Lower Body 2", date: 20220323, time: "9:10 PM")
r10 = Routine.create(user_id: u3.id, name: "HIIT Circuit", date: 20220219, time: "8:47 AM")

e1 = Exercise.create(name: "Bench Press", image: "https://www.taylorsstrength.co.uk/wp-content/uploads/2017/11/Rec-Bench-Press.jpg", muscle_group: "Chest")
e2 = Exercise.create(name: "Machine Fly", image: "https://images.squarespace-cdn.com/content/v1/55e406fbe4b0b03c5e7543ae/1492639173037-OGTEF55FJCOMWSMFV05H/Seated+Pec+Fly+Machine", muscle_group: "Chest")
e3 = Exercise.create(name: "Decline Machine Press", image: "https://images.squarespace-cdn.com/content/v1/55e406fbe4b0b03c5e7543ae/1492640119207-4NG76GMUDUI5GR0NGENN/Decline+Smith+Machine+Chest+Press", muscle_group: "Chest")
e4 = Exercise.create(name: "Lat Pulldown", image: "https://cdn-0.weighttraining.guide/wp-content/uploads/2016/05/wide-grip-lat-pull-down-resized.png?ezimgfmt=ng%3Awebp%2Fngcb4", muscle_group: "Back")
e5 = Exercise.create(name: "Plate-Loaded Row", image: "https://gymvisual.com/18064-thickbox_default/lever-one-arm-low-row-plate-loaded.jpg", muscle_group: "Back")
e6 = Exercise.create(name: "Bent-Over Dumbbell Row", image: "https://weighttraining.guide/wp-content/uploads/2016/10/bent-over-one-arm-dumbbell-row-resized.png", muscle_group: "Back")
e7 = Exercise.create(name: "Shoulder Press", image: "https://static.strengthlevel.com/images/illustrations/machine-shoulder-press-1000x1000.jpg", muscle_group: "Shoulders")
e8 = Exercise.create(name: "Rear Deltoid Fly", image: "http://cdn.shopify.com/s/files/1/0250/0362/2496/articles/5f9892a2b0625c92c74ee6b8_rear-delt-fly-machine-picture.png?v=1641754148", muscle_group: "Shoulders")
e9 = Exercise.create(name: "Lateral Raise", image: "https://i0.wp.com/www.fitliferegime.com/wp-content/uploads/2021/08/One-Arm-Cable-Lateral-Raise.jpg?fit=1920%2C1080&ssl=1", muscle_group: "Shoulders")
e10 = Exercise.create(name: "Hammer Curl", image: "https://weighttraining.guide/wp-content/uploads/2016/11/Dumbbell-Hammer-Curl-resized.png", muscle_group: "Arms")
e11 = Exercise.create(name: "Overhead Triceps Extension", image: "https://weighttraining.guide/wp-content/uploads/2017/08/seated-dumbbell-overhead-triceps-extension-resized.png", muscle_group: "Arms")
e12 = Exercise.create(name: "Preacher Curl", image: "https://fitnessvolt.com/wp-content/uploads/2020/08/barbell-preacher-curl-1-750x393.jpg", muscle_group: "Arms")
e13 = Exercise.create(name: "Triceps Press Machine", image: "https://the-optimal-you.com/wp-content/uploads/2016/04/the-optimal-you-machine-tricep-press-male.jpg", muscle_group: "Arms")
e14 = Exercise.create(name: "Squat", image: "https://i.ytimg.com/vi/U3HlEF_E9fo/maxresdefault.jpg", muscle_group: "Legs")
e15 = Exercise.create(name: "Bulgarian Split Squat", image: "https://weighttraining.guide/wp-content/uploads/2017/02/Barbell-Bulgarian-Split-Squat-resized-fixed.png", muscle_group: "Legs")
e16 = Exercise.create(name: "Deadlift", image: "https://weighttraining.guide/wp-content/uploads/2017/02/Barbell-sumo-deadlift-1.png", muscle_group: "Legs")
e17 = Exercise.create(name: "Calf Raise", image: "https://cdn-0.weighttraining.guide/wp-content/uploads/2016/10/Lever-Standing-Calf-Raise-resized.png?ezimgfmt=ng%3Awebp%2Fngcb4", muscle_group: "Legs")


ExerciseSet.create(routine_id: r1.id, exercise_id: e1.id, weight: 95, reps: 20)
ExerciseSet.create(routine_id: r1.id, exercise_id: e1.id, weight: 105, reps: 16)
ExerciseSet.create(routine_id: r1.id, exercise_id: e1.id, weight: 115, reps: 14)
ExerciseSet.create(routine_id: r1.id, exercise_id: e1.id, weight: 125, reps: 8)
ExerciseSet.create(routine_id: r1.id, exercise_id: e2.id, weight: 40, reps: 20)
ExerciseSet.create(routine_id: r1.id, exercise_id: e2.id, weight: 55, reps: 14)
ExerciseSet.create(routine_id: r1.id, exercise_id: e2.id, weight: 55, reps: 14)
ExerciseSet.create(routine_id: r1.id, exercise_id: e2.id, weight: 70, reps: 8)
ExerciseSet.create(routine_id: r1.id, exercise_id: e2.id, weight: 70, reps: 8)
ExerciseSet.create(routine_id: r1.id, exercise_id: e3.id, weight: 30, reps: 20)
ExerciseSet.create(routine_id: r1.id, exercise_id: e3.id, weight: 50, reps: 14)
ExerciseSet.create(routine_id: r1.id, exercise_id: e3.id, weight: 50, reps: 14)
ExerciseSet.create(routine_id: r1.id, exercise_id: e3.id, weight: 70, reps: 8)
ExerciseSet.create(routine_id: r1.id, exercise_id: e3.id, weight: 70, reps: 8)
ExerciseSet.create(routine_id: r2.id, exercise_id: e4.id, weight: 60, reps: 20)
ExerciseSet.create(routine_id: r2.id, exercise_id: e4.id, weight: 75, reps: 14)
ExerciseSet.create(routine_id: r2.id, exercise_id: e4.id, weight: 75, reps: 14)
ExerciseSet.create(routine_id: r2.id, exercise_id: e4.id, weight: 95, reps: 8)
ExerciseSet.create(routine_id: r2.id, exercise_id: e4.id, weight: 95, reps: 8)
ExerciseSet.create(routine_id: r2.id, exercise_id: e5.id, weight: 95, reps: 20)
ExerciseSet.create(routine_id: r2.id, exercise_id: e5.id, weight: 115, reps: 14)
ExerciseSet.create(routine_id: r2.id, exercise_id: e5.id, weight: 115, reps: 14)
ExerciseSet.create(routine_id: r2.id, exercise_id: e5.id, weight: 125, reps: 8)
ExerciseSet.create(routine_id: r2.id, exercise_id: e5.id, weight: 125, reps: 8)
ExerciseSet.create(routine_id: r2.id, exercise_id: e6.id, weight: 50, reps: 20)
ExerciseSet.create(routine_id: r2.id, exercise_id: e6.id, weight: 70, reps: 14)
ExerciseSet.create(routine_id: r2.id, exercise_id: e6.id, weight: 70, reps: 14)
ExerciseSet.create(routine_id: r2.id, exercise_id: e6.id, weight: 100, reps: 8)
ExerciseSet.create(routine_id: r2.id, exercise_id: e6.id, weight: 100, reps: 8)
ExerciseSet.create(routine_id: r3.id, exercise_id: e7.id, weight: 40, reps: 20)
ExerciseSet.create(routine_id: r3.id, exercise_id: e7.id, weight: 70, reps: 14)
ExerciseSet.create(routine_id: r3.id, exercise_id: e7.id, weight: 70, reps: 14)
ExerciseSet.create(routine_id: r3.id, exercise_id: e7.id, weight: 100, reps: 8)
ExerciseSet.create(routine_id: r3.id, exercise_id: e7.id, weight: 100, reps: 8)
ExerciseSet.create(routine_id: r3.id, exercise_id: e8.id, weight: 40, reps: 20)
ExerciseSet.create(routine_id: r3.id, exercise_id: e8.id, weight: 55, reps: 14)
ExerciseSet.create(routine_id: r3.id, exercise_id: e8.id, weight: 55, reps: 14)
ExerciseSet.create(routine_id: r3.id, exercise_id: e8.id, weight: 65, reps: 8)
ExerciseSet.create(routine_id: r3.id, exercise_id: e8.id, weight: 65, reps: 8)
ExerciseSet.create(routine_id: r3.id, exercise_id: e9.id, weight: 5, reps: 20)
ExerciseSet.create(routine_id: r3.id, exercise_id: e9.id, weight: 7, reps: 14)
ExerciseSet.create(routine_id: r3.id, exercise_id: e9.id, weight: 7, reps: 14)
ExerciseSet.create(routine_id: r3.id, exercise_id: e9.id, weight: 9, reps: 8)
ExerciseSet.create(routine_id: r3.id, exercise_id: e9.id, weight: 9, reps: 8)
ExerciseSet.create(routine_id: r4.id, exercise_id: e10.id, weight: 20, reps: 20)
ExerciseSet.create(routine_id: r4.id, exercise_id: e10.id, weight: 30, reps: 14)
ExerciseSet.create(routine_id: r4.id, exercise_id: e10.id, weight: 40, reps: 14)
ExerciseSet.create(routine_id: r4.id, exercise_id: e10.id, weight: 50, reps: 8)
ExerciseSet.create(routine_id: r4.id, exercise_id: e10.id, weight: 50, reps: 8)
ExerciseSet.create(routine_id: r4.id, exercise_id: e11.id, weight: 20, reps: 20)
ExerciseSet.create(routine_id: r4.id, exercise_id: e11.id, weight: 25, reps: 14)
ExerciseSet.create(routine_id: r4.id, exercise_id: e11.id, weight: 25, reps: 14)
ExerciseSet.create(routine_id: r4.id, exercise_id: e11.id, weight: 30, reps: 8)
ExerciseSet.create(routine_id: r4.id, exercise_id: e11.id, weight: 35, reps: 8)
ExerciseSet.create(routine_id: r4.id, exercise_id: e12.id, weight: 15, reps: 20)
ExerciseSet.create(routine_id: r4.id, exercise_id: e12.id, weight: 20, reps: 14)
ExerciseSet.create(routine_id: r4.id, exercise_id: e12.id, weight: 20, reps: 14)
ExerciseSet.create(routine_id: r4.id, exercise_id: e12.id, weight: 25, reps: 8)
ExerciseSet.create(routine_id: r4.id, exercise_id: e12.id, weight: 25, reps: 8)
ExerciseSet.create(routine_id: r4.id, exercise_id: e13.id, weight: 80, reps: 20)
ExerciseSet.create(routine_id: r4.id, exercise_id: e13.id, weight: 110, reps: 14)
ExerciseSet.create(routine_id: r4.id, exercise_id: e13.id, weight: 110, reps: 14)
ExerciseSet.create(routine_id: r4.id, exercise_id: e13.id, weight: 130, reps: 8)
ExerciseSet.create(routine_id: r4.id, exercise_id: e13.id, weight: 135, reps: 8)
ExerciseSet.create(routine_id: r5.id, exercise_id: e14.id, weight: 95, reps: 20)
ExerciseSet.create(routine_id: r5.id, exercise_id: e14.id, weight: 135, reps: 14)
ExerciseSet.create(routine_id: r5.id, exercise_id: e14.id, weight: 135, reps: 14)
ExerciseSet.create(routine_id: r5.id, exercise_id: e14.id, weight: 155, reps: 8)
ExerciseSet.create(routine_id: r5.id, exercise_id: e14.id, weight: 155, reps: 8)
ExerciseSet.create(routine_id: r5.id, exercise_id: e15.id, weight: 0, reps: 20)
ExerciseSet.create(routine_id: r5.id, exercise_id: e15.id, weight: 15, reps: 14)
ExerciseSet.create(routine_id: r5.id, exercise_id: e15.id, weight: 15, reps: 14)
ExerciseSet.create(routine_id: r5.id, exercise_id: e15.id, weight: 20, reps: 8)
ExerciseSet.create(routine_id: r5.id, exercise_id: e15.id, weight: 25, reps: 8)
ExerciseSet.create(routine_id: r5.id, exercise_id: e16.id, weight: 95, reps: 20)
ExerciseSet.create(routine_id: r5.id, exercise_id: e16.id, weight: 155, reps: 14)
ExerciseSet.create(routine_id: r5.id, exercise_id: e16.id, weight: 155, reps: 14)
ExerciseSet.create(routine_id: r5.id, exercise_id: e16.id, weight: 185, reps: 8)
ExerciseSet.create(routine_id: r5.id, exercise_id: e16.id, weight: 205, reps: 8)
ExerciseSet.create(routine_id: r5.id, exercise_id: e16.id, weight: 225, reps: 4)
ExerciseSet.create(routine_id: r5.id, exercise_id: e17.id, weight: 120, reps: 20)
ExerciseSet.create(routine_id: r5.id, exercise_id: e17.id, weight: 160, reps: 14)
ExerciseSet.create(routine_id: r5.id, exercise_id: e17.id, weight: 160, reps: 1)
ExerciseSet.create(routine_id: r5.id, exercise_id: e17.id, weight: 200, reps: 8)
ExerciseSet.create(routine_id: r5.id, exercise_id: e17.id, weight: 200, reps: 8)


