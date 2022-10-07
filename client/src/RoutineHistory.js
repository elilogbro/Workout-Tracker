import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import RoutineList from './RoutineList';
import RoutineCard from './RoutineCard';
import styled from 'styled-components';

function RoutineHistory({userRoutines, handleDeletedRoutine, setUserRoutines, user, userSets, setUserSets, userExercises, setUserExercises}) {

    const [currentRoutine, setCurrentRoutine] = useState(null)
    const [routineExercises, setRoutineExercises] = useState(null)
    const [isInEdit, setIsInEdit] = useState(false)
    const [routineSets, setRoutineSets] = useState(null)

    const history = useHistory();

    const renderRoutines = userRoutines.map(routine => (
        <RoutineList 
            setCurrentRoutine={setCurrentRoutine}
            routine={routine}
            key={routine.id}
            handleDeletedRoutine={handleDeletedRoutine}
            setRoutineExercises={setRoutineExercises}
            routineExercises={routineExercises}
            userExercises={userExercises}
            setIsInEdit={setIsInEdit}
            isInEdit={isInEdit}
            routineSets={routineSets}
            setRoutineSets={setRoutineSets}
            currentRoutine={currentRoutine}
            />
            ))

    const handleClick = () => {
        history.push('/new-routine')
    }

    const handleUpdatedName = (updatedRoutine) => {
        const updateRoutines = userRoutines.map(routine => routine.id === updatedRoutine.id ? updatedRoutine : routine)
        setUserRoutines(updateRoutines)

        setCurrentRoutine(updatedRoutine)
      }


    return (
        <Wrapper>
            {/* {console.log(currentRoutine)} */}
            {currentRoutine ?
                <RoutineCard 
                    setCurrentRoutine={setCurrentRoutine}
                    routineExercises={routineExercises}
                    currentRoutine={currentRoutine}
                    handleUpdatedName={handleUpdatedName}
                    isInEdit={isInEdit}
                    user={user}
                    setRoutineExercises={setRoutineExercises}
                    userSets={userSets}
                    setUserSets={setUserSets}
                    userExercises={userExercises}
                    userRoutines={userRoutines}
                    setUserRoutines={setUserRoutines}
                    setUserExercises={setUserExercises}
                    routineSets={routineSets}
                    setRoutineSets={setRoutineSets}

                    />
            :
            <div>
                <Button onClick={handleClick}>New Routine</Button>
                <CursorWrapper>{renderRoutines}</CursorWrapper>
            </div>
        }
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    border: 1px solid;
    padding-bottom: 12px;
    text-align: center;
`;

const Button = styled.button`
    width: fit-content;
    align-self: center;
    margin-top: 1em;
    cursor: pointer;
    border: 1px solid;
    border-radius: 0.5em;
    margin-bottom: 8px;
    font-size: 18px;
`;

const CursorWrapper = styled.div`
    cursor: pointer;
`;

export default RoutineHistory;