function Recommendation() {
    const currentDay = new Date().getDay();
    console.log(currentDay);
    const isFriday = currentDay === 5;
    // const isSpring = currentMonth >= 2 && currentMonth <= 5;
    console.log(isFriday);

    if (!isFriday) {
        return <div>Ce n'est pas vendredi</div>
    }

    return <div>C'est vendredi !</div>
}

export default Recommendation