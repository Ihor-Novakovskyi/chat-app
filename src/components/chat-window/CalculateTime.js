export default function calculateTime(startTimeRequest) { 
    const timeDifference = new Date() - startTimeRequest;
    let minutes = Math.round(timeDifference / (1000 * 60));
    let hours = 0;
    if (minutes > 60) { 
        hours = Math.floor(minutes / 60);
        minutes = minutes - (hours * 60);
    }
    return {
        hours,
        minutes
    }
}