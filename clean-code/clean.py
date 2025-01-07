from typing import List

class Student:
    """Represents a student with a name and a list of grades."""
    
    def __init__(self, name: str, grades: List[float]):
        self.name = name
        self.grades = grades

    def calculate_average(self) -> float:
        """Calculates and returns the average grade of the student."""
        if not self.grades:
            raise ValueError(f"Student {self.name} has no grades.")
        return sum(self.grades) / len(self.grades)

    def is_passing(self, threshold: float = 50.0) -> bool:
        """Determines if the student is passing based on the average grade."""
        return self.calculate_average() >= threshold


class GradeClassifier:
    """Handles the classification of students based on their grades."""
    
    @staticmethod
    def classify_students(students: List[Student], pass_threshold: float = 50.0) -> None:
        """Classifies and prints the pass/fail status of each student."""
        for student in students:
            status = "Pass" if student.is_passing(pass_threshold) else "Fail"
            print(f"{student.name}: {status}")


# Example Usage
if __name__ == "__main__":
    students = [
        Student(name="Alice", grades=[85, 90, 78]),
        Student(name="Bob", grades=[45, 50, 40]),
        Student(name="Charlie", grades=[60, 70, 80])
    ]
    
    GradeClassifier.classify_students(students)
