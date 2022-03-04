import React, { useState } from 'react'

function useDay() {
    
    let day;
    let timeOfDay;

    (() => {
        let days = [
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
        ];
        day = days[new Date().getDay()]
        return day;
    })();

    (() => {
        let currentHour = new Date().getHours();
        if (currentHour < 12) {
            timeOfDay="Morning"
        } else if (currentHour < 18) {
            timeOfDay="Morning"
        } else {
            timeOfDay="Evening"
        }
    })();


    return [day, timeOfDay]
}

export default useDay