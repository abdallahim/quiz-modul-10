const questions = [
    {
        question: "Apa itu algoritma?",
        answers: {
            a: "Proses atau serangkaian aturan yang diikuti untuk menyelesaikan tugas tertentu",
            b: "Bahasa pemrograman",
            c: "Kompilasi kode",
            d: "Metode pengujian perangkat lunak"
        },
        correctAnswer: "a",
        explanation: "Algoritma adalah proses atau serangkaian aturan yang diikuti untuk menyelesaikan tugas tertentu."
    },
    {
        question: "Apa langkah pertama dalam menyelesaikan masalah dengan algoritma?",
        answers: {
            a: "Implementasi",
            b: "Pseudocode",
            c: "Pemahaman",
            d: "Strategi"
        },
        correctAnswer: "c",
        explanation: "Langkah pertama adalah memahami masalah tersebut."
    },
    {
        question: "Apa itu pseudocode?",
        answers: {
            a: "Kode yang dapat dijalankan oleh komputer",
            b: "Versi yang lebih mudah dipahami dari bahasa pemrograman",
            c: "Bahasa pemrograman baru",
            d: "Metode pengujian algoritma"
        },
        correctAnswer: "b",
        explanation: "Pseudocode adalah versi yang lebih mudah dipahami dari bahasa pemrograman, biasanya dalam bentuk bahasa alami."
    },
    {
        question: "Apa yang dimaksud dengan Big O Notation?",
        answers: {
            a: "Cara mengukur efisiensi algoritma",
            b: "Metode debugging",
            c: "Metode kompilasi kode",
            d: "Bahasa pemrograman"
        },
        correctAnswer: "a",
        explanation: "Big O Notation adalah cara mengukur efisiensi algoritma."
    },
    {
        question: "Apa yang diukur oleh Time Complexity?",
        answers: {
            a: "Jumlah memori yang digunakan oleh fungsi",
            b: "Jumlah langkah komputasi yang diperlukan untuk menjalankan fungsi",
            c: "Jumlah baris kode",
            d: "Jumlah input"
        },
        correctAnswer: "b",
        explanation: "Time Complexity mengukur jumlah langkah komputasi yang diperlukan untuk menjalankan fungsi."
    },
    {
        question: "Apa itu Linear Search?",
        answers: {
            a: "Algoritma pencarian yang menggunakan array terurut",
            b: "Algoritma pencarian yang menggunakan array tak terurut",
            c: "Algoritma pengurutan",
            d: "Algoritma penghapusan"
        },
        correctAnswer: "b",
        explanation: "Linear Search adalah algoritma pencarian yang menggunakan array tak terurut."
    },
    {
        question: "Apa itu Binary Search?",
        answers: {
            a: "Algoritma pencarian yang menggunakan array terurut",
            b: "Algoritma pencarian yang menggunakan array tak terurut",
            c: "Algoritma pengurutan",
            d: "Algoritma penghapusan"
        },
        correctAnswer: "a",
        explanation: "Binary Search adalah algoritma pencarian yang menggunakan array terurut."
    },
    {
        question: "Apa itu Bubble Sort?",
        answers: {
            a: "Algoritma pengurutan yang menggunakan pendekatan berbasis bubble",
            b: "Algoritma pencarian yang menggunakan pendekatan berbasis bubble",
            c: "Algoritma penghapusan yang menggunakan pendekatan berbasis bubble",
            d: "Algoritma penggabungan yang menggunakan pendekatan berbasis bubble"
        },
        correctAnswer: "a",
        explanation: "Bubble Sort adalah algoritma pengurutan yang menggunakan pendekatan berbasis bubble."
    },
    {
        question: "Apa kompleksitas waktu terburuk dari Bubble Sort?",
        answers: {
            a: "O(n)",
            b: "O(log n)",
            c: "O(n^2)",
            d: "O(n log n)"
        },
        correctAnswer: "c",
        explanation: "Kompleksitas waktu terburuk dari Bubble Sort adalah O(n^2)."
    },
    {
        question: "Apa kompleksitas ruang dari Bubble Sort?",
        answers: {
            a: "O(1)",
            b: "O(n)",
            c: "O(log n)",
            d: "O(n^2)"
        },
        correctAnswer: "a",
        explanation: "Kompleksitas ruang dari Bubble Sort adalah O(1)."
    },
    {
        question: "Apa itu Selection Sort?",
        answers: {
            a: "Algoritma pengurutan yang menggunakan teknik rekursi",
            b: "Algoritma pencarian yang menggunakan teknik rekursi",
            c: "Algoritma penghapusan yang menggunakan teknik rekursi",
            d: "Algoritma penggabungan yang menggunakan teknik rekursi"
        },
        correctAnswer: "a",
        explanation: "Selection Sort adalah algoritma pengurutan yang menggunakan teknik rekursi."
    },
    {
        question: "Apa kompleksitas waktu terburuk dari Selection Sort?",
        answers: {
            a: "O(n)",
            b: "O(log n)",
            c: "O(n^2)",
            d: "O(n log n)"
        },
        correctAnswer: "c",
        explanation: "Kompleksitas waktu terburuk dari Selection Sort adalah O(n^2)."
    },
    {
        question: "Apa kompleksitas ruang dari Selection Sort?",
        answers: {
            a: "O(1)",
            b: "O(n)",
            c: "O(log n)",
            d: "O(n^2)"
        },
        correctAnswer: "a",
        explanation: "Kompleksitas ruang dari Selection Sort adalah O(1)."
    },
    {
        question: "Apa yang dimaksud dengan 'Brute Force' dalam konteks algoritma?",
        answers: {
            a: "Pendekatan yang tidak efisien namun efektif",
            b: "Pendekatan yang efisien dan efektif",
            c: "Pendekatan yang hanya menggunakan memori ekstra",
            d: "Pendekatan yang hanya menggunakan waktu ekstra"
        },
        correctAnswer: "a",
        explanation: "'Brute Force' adalah pendekatan yang tidak efisien namun efektif."
    },
    {
        question: "Apa yang dimaksud dengan 'Space Complexity'?",
        answers: {
            a: "Jumlah waktu yang diperlukan oleh fungsi",
            b: "Jumlah memori yang digunakan oleh fungsi",
            c: "Jumlah langkah komputasi yang diperlukan untuk menjalankan fungsi",
            d: "Jumlah input"
        },
        correctAnswer: "b",
        explanation: "Space Complexity adalah jumlah memori yang digunakan oleh fungsi."
    },
    {
        question: "Apa yang dimaksud dengan 'Time Complexity'?",
        answers: {
            a: "Jumlah waktu yang diperlukan oleh fungsi",
            b: "Jumlah memori yang digunakan oleh fungsi",
            c: "Jumlah langkah komputasi yang diperlukan untuk menjalankan fungsi",
            d: "Jumlah input"
        },
        correctAnswer: "c",
        explanation: "Time Complexity adalah jumlah langkah komputasi yang diperlukan untuk menjalankan fungsi."
    },
    {
        question: "Apa yang dimaksud dengan 'O(1)' dalam Big O Notation?",
        answers: {
            a: "Kompleksitas konstan",
            b: "Kompleksitas linear",
            c: "Kompleksitas logaritmik",
            d: "Kompleksitas kuadrat"
        },
        correctAnswer: "a",
        explanation: "O(1) dalam Big O Notation berarti kompleksitas konstan."
    },
    {
        question: "Apa yang dimaksud dengan 'O(n)' dalam Big O Notation?",
        answers: {
            a: "Kompleksitas konstan",
            b: "Kompleksitas linear",
            c: "Kompleksitas logaritmik",
            d: "Kompleksitas kuadrat"
        },
        correctAnswer: "b",
        explanation: "O(n) dalam Big O Notation berarti kompleksitas linear."
    },
    {
        question: "Apa yang dimaksud dengan 'O(log n)' dalam Big O Notation?",
        answers: {
            a: "Kompleksitas konstan",
            b: "Kompleksitas linear",
            c: "Kompleksitas logaritmik",
            d: "Kompleksitas kuadrat"
        },
        correctAnswer: "c",
        explanation: "O(log n) dalam Big O Notation berarti kompleksitas logaritmik."
    },
    {
        question: "Apa yang dimaksud dengan 'O(n^2)' dalam Big O Notation?",
        answers: {
            a: "Kompleksitas konstan",
            b: "Kompleksitas linear",
            c: "Kompleksitas logaritmik",
            d: "Kompleksitas kuadrat"
        },
        correctAnswer: "d",
        explanation: "O(n^2) dalam Big O Notation berarti kompleksitas kuadrat."
    },
    {
        question: "Apa perbedaan utama antara Linear Search dan Binary Search?",
        answers: {
            a: "Linear Search menggunakan array terurut, Binary Search menggunakan array tak terurut",
            b: "Linear Search menggunakan array tak terurut, Binary Search menggunakan array terurut",
            c: "Linear Search lebih efisien daripada Binary Search",
            d: "Binary Search lebih lambat dari Linear Search"
        },
        correctAnswer: "b",
        explanation: "Linear Search menggunakan array tak terurut, sedangkan Binary Search menggunakan array terurut."
    },
    {
        question: "Apa itu Jump Search?",
        answers: {
            a: "Algoritma pencarian yang menggunakan lompatan untuk mempercepat pencarian",
            b: "Algoritma pencarian yang menggunakan array tak terurut",
            c: "Algoritma pengurutan yang menggunakan lompatan",
            d: "Algoritma penghapusan yang menggunakan lompatan"
        },
        correctAnswer: "a",
        explanation: "Jump Search adalah algoritma pencarian yang menggunakan lompatan untuk mempercepat pencarian."
    },
    {
        question: "Apa itu Interpolation Search?",
        answers: {
            a: "Algoritma pencarian yang menggunakan interpolasi untuk mempercepat pencarian",
            b: "Algoritma pencarian yang menggunakan array tak terurut",
            c: "Algoritma pengurutan yang menggunakan interpolasi",
            d: "Algoritma penghapusan yang menggunakan interpolasi"
        },
        correctAnswer: "a",
        explanation: "Interpolation Search adalah algoritma pencarian yang menggunakan interpolasi untuk mempercepat pencarian."
    },
    {
        question: "Apa itu Exponential Search?",
        answers: {
            a: "Algoritma pencarian yang menggunakan eksponensial untuk mempercepat pencarian",
            b: "Algoritma pencarian yang menggunakan array tak terurut",
            c: "Algoritma pengurutan yang menggunakan eksponensial",
            d: "Algoritma penghapusan yang menggunakan eksponensial"
        },
        correctAnswer: "a",
        explanation: "Exponential Search adalah algoritma pencarian yang menggunakan eksponensial untuk mempercepat pencarian."
    },
    {
        question: "Apa itu Fibonacci Search?",
        answers: {
            a: "Algoritma pencarian yang menggunakan deret Fibonacci untuk mempercepat pencarian",
            b: "Algoritma pencarian yang menggunakan array tak terurut",
            c: "Algoritma pengurutan yang menggunakan deret Fibonacci",
            d: "Algoritma penghapusan yang menggunakan deret Fibonacci"
        },
        correctAnswer: "a",
        explanation: "Fibonacci Search adalah algoritma pencarian yang menggunakan deret Fibonacci untuk mempercepat pencarian."
    },
    {
        question: "Apa yang dimaksud dengan 'O(n log n)' dalam Big O Notation?",
        answers: {
            a: "Kompleksitas konstan",
            b: "Kompleksitas linear",
            c: "Kompleksitas logaritmik",
            d: "Kompleksitas log-linear"
        },
        correctAnswer: "d",
        explanation: "O(n log n) dalam Big O Notation berarti kompleksitas log-linear."
    },
    {
        question: "Apa itu Merge Sort?",
        answers: {
            a: "Algoritma pengurutan yang menggunakan pendekatan berbasis penggabungan",
            b: "Algoritma pencarian yang menggunakan pendekatan berbasis penggabungan",
            c: "Algoritma penghapusan yang menggunakan pendekatan berbasis penggabungan",
            d: "Algoritma penyisipan yang menggunakan pendekatan berbasis penggabungan"
        },
        correctAnswer: "a",
        explanation: "Merge Sort adalah algoritma pengurutan yang menggunakan pendekatan berbasis penggabungan."
    },
    {
        question: "Apa itu Quick Sort?",
        answers: {
            a: "Algoritma pengurutan yang menggunakan pendekatan berbasis cepat",
            b: "Algoritma pencarian yang menggunakan pendekatan berbasis cepat",
            c: "Algoritma penghapusan yang menggunakan pendekatan berbasis cepat",
            d: "Algoritma penyisipan yang menggunakan pendekatan berbasis cepat"
        },
        correctAnswer: "a",
        explanation: "Quick Sort adalah algoritma pengurutan yang menggunakan pendekatan berbasis cepat."
    }
];

function buildQuiz() {
    const quizContainer = document.getElementById('quiz');
    const output = [];
    
    questions.forEach((currentQuestion, questionNumber) => {
        const answers = [];
        for (letter in currentQuestion.answers) {
            answers.push(
                `<label>
                    <input type="radio" name="question${questionNumber}" value="${letter}">
                    ${letter} : ${currentQuestion.answers[letter]}
                </label>`
            );
        }
        
        output.push(
            `<div class="question">
                <h3>${questionNumber + 1}. ${currentQuestion.question}</h3>
                <div class="answers">${answers.join('')}</div>
                <div id="explanation${questionNumber}" class="explanation"></div>
            </div>`
        );
    });
    
    quizContainer.innerHTML = output.join('');
}

function submitQuiz() {
    const answerContainers = document.querySelectorAll('.answers');
    let score = 0;
    
    questions.forEach((currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
        
        const explanationContainer = document.getElementById(`explanation${questionNumber}`);
        if (userAnswer === currentQuestion.correctAnswer) {
            score++;
            explanationContainer.innerHTML = `Jawaban benar. ${currentQuestion.explanation}`;
            explanationContainer.className = "explanation correct-answer";
        } else {
            explanationContainer.innerHTML = `Jawaban salah. ${currentQuestion.explanation}`;
            explanationContainer.className = "explanation incorrect-answer";
        }
    });
    
    const resultContainer = document.getElementById('result');
    resultContainer.innerHTML = `Kamu mendapatkan ${score} dari ${questions.length} soal yang benar.`;
}

document.addEventListener('DOMContentLoaded', () => {
    buildQuiz();
});
