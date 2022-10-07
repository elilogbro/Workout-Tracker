import React, {useState} from 'react';
import Search from './Search';
import ExerciseCard from './ExerciseCard';
import styled from 'styled-components';
import RoutineExerciseCard from './RoutineExerciseCard'

function ExerciseList({exercises, exerciseSets, setExerciseSets, currentRoutine, isInEdit, user, userSets, currentExercise, setCurrentExercise, reps, setReps, weight, setWeight, routineSets, setRoutineSets}) {

    const [searchQuery, setSearchQuery] = useState("")

    const filteredExercises = exercises.filter(exercise => exercise.name.toLowerCase().includes(searchQuery.toLowerCase()))

    const renderExerciseCards = filteredExercises.map(exercise => <ExerciseCard exercise={exercise} key={exercise.id}/>)


    return (
        <div>
            <Wrapper>
                <Search
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                />
                <InnerWrapper>
                    {renderExerciseCards}
                </InnerWrapper>
            </Wrapper>
        </div>
    )
}

const InnerWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export default ExerciseList;