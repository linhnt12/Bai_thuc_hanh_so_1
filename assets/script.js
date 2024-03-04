document.getElementById('quest').addEventListener('submit', function (event) {
    event.preventDefault();

    let score = 0;
    const answers = {
        q1: "true",
        q2: "false",
        q3: "true",
        q4: "true",
        q5: "false",
        q6: "true",
        q7: "false",
        q8: "false",
        q9: "true",
        q10: "false",
        q11: "a",
        q12: "b",
        q13: "c",
        q14: "d",
        q15: "a",
        q16: "b",
        q17: "c",
        q18: "d", 
        q19: "a",
        q20: "b",
        q21: ["a", "b", "d"],
        q22: ["a", "c", "d"],
        q23: ["b", "c", "d"],
        q24: ["a", "b", "c"],
        q25: ["a", "b", "d"],
        q26: ["b", "c", "d"],
        q27: ["a", "b", "c"],
        q28: ["b", "c", "d"],
        q29: ["a", "b", "c"],
        q30: ["a", "b", "d"]
    };
    for (let i = 1; i <= Object.keys(answers).length; i++) {
        const userAnswer = document.querySelector('input[name="q' + i + '"]:checked');
        if (userAnswer) {
            if (userAnswer.value === answers['q' + i]) {
                score++;
            }
        }
    }
    alert("Số câu đúng: " + score + " / " + (Object.keys(answers).length + 10));
});
