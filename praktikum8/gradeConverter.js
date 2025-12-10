function convertToLetterGrade(score) {
    if (typeof score !== 'number' || score < 0 || score > 100) {
        return 'Nilai tidak valid. Masukkan angka antara 0 dan 100.';
    }

    if (score >= 81) {
        return 'A';
    } else if (score >= 71) {
        return 'AB';
    } else if (score >= 66) {
        return 'B';
    } else if (score >= 61) {
        return 'BC';
    } else if (score >= 56) {
        return 'C';
    } else if (score >= 41) {
        return 'D';
    } else {
        return 'E';
    }
}