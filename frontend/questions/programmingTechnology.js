// programmingTechnology.js
const programmingTechnologyQuestions = [
    {
        title: "Introduction to Programming Technology – Python Language",
        content: `Python is a versatile and user-friendly programming language, widely used in web development, data analysis, artificial intelligence, and automation. It is known for its simplicity and readability, making it an ideal choice for beginners and professionals alike. With a large ecosystem of libraries and frameworks, Python enables developers to efficiently solve problems across various domains.`,
        code: ""
    },
    {
        title: "Writing Simple Python Programs and Working with Input/Output",
        content: `The ability to write simple programs is the foundation of programming. In Python, you can use the print() function to display output and the input() function to accept user input. For example:`,
        code: `# Python code example
    
    name = input("What is your name? ")
    print(f"Hello, {name}!")`
    },
    {
        title: "Introducing the Basic Structure and Syntax of Python Programming",
        content: `Python executes code line by line, which is known as an interpreted programming language. One of its defining features is the mandatory use of indentation to define blocks of code, replacing the curly braces {} used in many other languages. For example:`,
        code: `# Python code example
    
    if x > 0:
        print("Positive")
    else:
        print("Negative")`
    },
    {
        title: "Data Types and Operators",
        content: `Python offers several common data types such as integers (int), floating-point numbers (float), and strings (str). Operators like +, -, *, and / allow basic arithmetic operations. Strings can be concatenated using the + operator, and numbers can be combined or compared using these operators.`,
        code: ""
    },
    {
        title: "Basic Arithmetic Operations",
        content: `Python supports fundamental arithmetic operations: addition (+), subtraction (-), multiplication (*), and division (/). These operations are intuitive and can be performed directly in Python’s interactive shell:`,
        code: `# Python code example
    
    result = 5 + 3
    print(result)  # Output: 8`
    },
    {
        title: "Working with Integers and Floats",
        content: `Integers (int) are whole numbers, while floating-point numbers (float) include decimals. Python automatically handles these types during arithmetic operations. For example:`,
        code: `# Python code example
    
    x = 5  # Integer
    y = 2.5  # Float
    z = x + y  # Result is 7.5 (float)`
    },
    {
        title: "Basic Mathematical Operations",
        content: `Python offers additional operators for advanced calculations:
    •	** for exponentiation (e.g., 2 ** 3 = 8),
    •	% for the remainder of a division (e.g., 5 % 2 = 1),
    •	// for floor division, which returns the integer part of a division (e.g., 5 // 2 = 2).`,
        code: ""
    },
    {
        title: "Control Structures",
        content: `Control structures like if, elif, and else allow decision-making in programs. These structures execute specific blocks of code based on given conditions. For example:`,
        code: `# Python code example
    
    age = 18
    if age < 18:
        print("Minor")
    elif age == 18:
        print("Exactly 18")
    else:
        print("Adult")`
    },
    {
        title: "Simple if-else Conditions",
        content: `The if-else structure is one of the simplest control structures. It evaluates a condition and executes code based on whether the condition is True or False:`,
        code: `# Python code example
    
    number = 10
    if number > 0:
        print("Positive")
    else:
        print("Negative")`
    },
    {
        title: "Using Loops (for, while)",
        content: `Loops allow repeated execution of code until a condition is met. The \`for\` loop is used for iterating over sequences, while the \`while\` loop continues as long as its condition is true. For example:`,
        code: `# Python code example
    
    # For loop
    for i in range(5):
        print(i)
    
    # While loop
    x = 0
    while x < 5:
        print(x)
        x += 1`
    }
//10 вопросов___________________________________________________________10 вопросов__________________________________________________________10 вопросов_____________________
    ,
    {
        title: "Defining and Calling Functions",
        content: `Functions are reusable blocks of code. You can define them using the def keyword and call them by their name. For example:`,
        code: `# Python code example
    
    def greet(name):
        return f"Hello, {name}!"
    
    print(greet("Alice"))`
    },
    {
        title: "Recursion and Lambda Functions",
        content: `• Recursion: A function calling itself to solve smaller instances of a problem. Example:
    • Lambda functions: Anonymous, single-line functions. Example:`,
        code: `# Python code example
    
    # Recursion
    def factorial(n):
        if n == 0:
            return 1
        return n * factorial(n - 1)
    print(factorial(5))  # Output: 120
    
    # Lambda function
    square = lambda x: x ** 2
    print(square(3))  # Output: 9`
    },
    {
        title: "Lists and Tuples",
        content: `In Python, lists and tuples are used to store multiple items in a single variable.
    • Lists are mutable, meaning their elements can be changed.
    • Tuples are immutable, meaning once created, their elements cannot be modified.`,
        code: `# Python code example
    
    # List
    my_list = [1, 2, 3]
    my_list[0] = 10  # Lists are mutable
    print(my_list)  # Output: [10, 2, 3]
    
    # Tuple
    my_tuple = (1, 2, 3)
    # my_tuple[0] = 10  # Error, tuples are immutable`
    },
    {
        title: "List and Tuple Operations (Creation, Accessing, and Modifying Elements)",
        content: `• List creation: Lists are created using square brackets [], and elements are accessed via indexing. Lists are mutable, so we can modify elements directly.
    • Tuple creation: Tuples are created using parentheses (), and elements are accessed by index, but they cannot be modified once created.`,
        code: `# Python code example
    
    # List example
    list_example = [1, 2, 3]
    list_example[1] = 5  # Modification is allowed
    print(list_example)  # Output: [1, 5, 3]
    
    # Tuple example
    tuple_example = (1, 2, 3)
    # tuple_example[1] = 5  # Error, tuples are immutable`
    },
    {
        title: "Using List Comprehensions for Data Transformation",
        content: `List comprehensions provide a concise way to create and transform lists. This technique can be used to apply operations and filters to lists in a single line of code.`,
        code: `# Python code example
    
    # Create a list of squares
    squares = [x**2 for x in range(5)]
    print(squares)  # Output: [0, 1, 4, 9, 16]`
    },
    {
        title: "Dictionaries and Sets",
        content: `• Dictionaries store key-value pairs, where each key maps to a value.
    • Sets store unique values, meaning duplicates are automatically removed.`,
        code: `# Python code example
    
    # Dictionary
    my_dict = {"name": "Alice", "age": 25}
    print(my_dict["name"])  # Output: Alice
    
    # Set
    my_set = {1, 2, 3, 2, 1}
    print(my_set)  # Output: {1, 2, 3} (duplicates removed)`
    },
    {
        title: "Creating and Accessing Elements",
        content: `• Creating dictionaries: Use curly braces {} to create dictionaries with key-value pairs.
    • Accessing elements: Use the keys to access the associated values in dictionaries.
    • Creating sets: Use curly braces {} to create sets, and elements can be added or removed.`,
        code: `# Python code example
    
    # Dictionary creation and access
    my_dict = {"name": "Alice", "age": 25}
    print(my_dict["name"])  # Access by key, Output: Alice
    
    # Set creation and adding elements
    my_set = {1, 2, 3}
    my_set.add(4)
    print(my_set)  # Output: {1, 2, 3, 4}`
    },
    {
        title: "Updating Dictionary Elements",
        content: `In Python, you can update the values of a dictionary by using the key to reference the value you want to modify.`,
        code: `# Python code example
    
    my_dict = {"name": "Alice", "age": 25}
    my_dict["age"] = 26  # Update the value of the "age" key
    print(my_dict)  # Output: {'name': 'Alice', 'age': 26}`
    },
    {
        title: "Strings and String Manipulation",
        content: `Strings are sequences of characters in Python. They can be manipulated using various built-in methods like concatenation (+), and functions like lower(), upper(), replace(), and split().`,
        code: `# Python code example
    
    text = "Hello"
    print(text + " World!")  # Concatenation, Output: Hello World!
    print(text.lower())  # Output: hello`
    },
    {
        title: "String Formatting",
        content: `In Python, you can format strings using f-strings or the format() method to inject variables into strings in a readable way.`,
        code: `# Python code example
    
    name = "Alice"
    age = 25
    formatted_string = f"Name: {name}, Age: {age}"
    print(formatted_string)  # Output: Name: Alice, Age: 25`
    }
//20 вопросов___________________________________________________________20 вопросов__________________________________________________________20 вопросов_____________________

    ,
    {
        title: "Understand String Operations and Manipulation Techniques",
        content: `String operations include methods like replace(), split(), and join(), which are used to manipulate and modify string content.`,
        code: `# Python code example
    
    # Replace characters
    text = "Hello World"
    new_text = text.replace("World", "Python")
    print(new_text)  # Output: Hello Python
    
    # Split string into a list
    words = text.split(" ")
    print(words)  # Output: ['Hello', 'World']`
    },
    {
        title: "File Handling in Python",
        content: `Python provides built-in functions like open() to work with files in reading, writing, and appending modes.`,
        code: `# Python code example
    
    # Writing to a file
    with open("example.txt", "w") as file:
        file.write("Hello, Python!")
    
    # Reading from a file
    with open("example.txt", "r") as file:
        content = file.read()
    print(content)  # Output: Hello, Python!`
    },
    {
        title: "Reading from Files (Text and CSV)",
        content: `To read data from files in Python, you can use methods like read(), readlines(), or for CSV files, the csv.reader() method.`,
        code: `# Python code example
    
    # Reading a text file
    with open("example.txt", "r") as file:
        content = file.readlines()
    print(content)  # Output: ['Hello, Python!']
    
    # Reading a CSV file
    import csv
    with open("data.csv", "r") as file:
        reader = csv.reader(file)
        for row in reader:
            print(row)`
    },
    {
        title: "Writing to Files (Text and CSV)",
        content: `Writing data to files can be done using write(), writelines(), or the csv.writer() method for CSV files.`,
        code: `# Python code example
    
    # Writing to a text file
    with open("output.txt", "w") as file:
        file.write("Hello, Python!")
    
    # Writing to a CSV file
    import csv
    data = [["Name", "Age"], ["Alice", 25], ["Bob", 30]]
    with open("output.csv", "w") as file:
        writer = csv.writer(file)
        writer.writerows(data)`
    },
    {
        title: "Error Handling in Python Programs",
        content: `Python provides mechanisms for handling errors through try and except blocks. This allows you to catch exceptions and handle them gracefully without crashing the program.`,
        code: `# Python code example
    
    try:
        result = 10 / 0
    except ZeroDivisionError:
        print("Cannot divide by zero!")`
    },
    {
        title: "Handling Exceptions in Python Programs (Try/Except Blocks)",
        content: `When an error occurs, you can use try and except to catch the specific error and handle it.`,
        code: `# Python code example
    
    try:
        number = int(input("Enter a number: "))
    except ValueError:
        print("Invalid input! Please enter a valid number.")`
    },
    {
        title: "Object-Oriented Programming (OOP)",
        content: `Object-Oriented Programming (OOP) is a programming paradigm based on the concept of "objects," which can contain data and methods that operate on that data. In Python, classes and objects are fundamental in implementing OOP principles.`
    },
    {
        title: "Creating Classes and Objects",
        content: `In Python, classes define the structure of objects, including the data they hold and the methods (functions) that operate on that data. Objects are instances of classes. You define a class using the class keyword, and you create objects by calling the class as if it were a function.`,
        code: `# Python code example
    
    class Person:
        def __init__(self, name, age):
            self.name = name
            self.age = age
    
        def greet(self):
            print(f"Hello, my name is {self.name} and I am {self.age} years old.")
    
    # Creating an object of the class
    person1 = Person("Alice", 25)
    person1.greet()  # Output: Hello, my name is Alice and I am 25 years old.`
    },
    {
        title: "OOP: Understanding Methods and Attributes",
        content: `In object-oriented programming (OOP), methods are functions defined inside classes, and attributes are variables that store data related to the object. The self keyword refers to the instance of the object and is used to access both attributes and methods.`,
        code: `# Python code example
    
    class Car:
        def __init__(self, brand, model):
            self.brand = brand  # Attribute
            self.model = model  # Attribute
    
        def display_info(self):  # Method
            print(f"Brand: {self.brand}, Model: {self.model}")
    
    car1 = Car("Toyota", "Corolla")
    car1.display_info()  # Output: Brand: Toyota, Model: Corolla`
    },
    {
        title: "The Basic Principles of OOP in Python",
        content: `The fundamental principles of Object-Oriented Programming include:
    • Encapsulation: The bundling of data (attributes) and methods within a class.
    • Inheritance: The ability to create a new class based on an existing class, inheriting its properties and methods.
    • Polymorphism: The ability to use the same method name across different classes, but with different implementations.`,
        code: `# Python code example
    
    class Animal:
        def speak(self):
            print("Animal speaks")
    
    class Dog(Animal):  # Inheritance
        def speak(self):  # Polymorphism
            print("Dog barks")
    
    dog = Dog()
    dog.speak()  # Output: Dog barks`
    }
    
//30 вопросов___________________________________________________________30 вопросов__________________________________________________________30 вопросов_____________________

    ,
    {
        title: "Advanced OOP Concepts",
        content: `Advanced OOP concepts include:
    • Abstraction: Hiding the complexity of the implementation and exposing only the necessary details to the user.
    • Multiple Inheritance: A class can inherit from more than one class.
    • Dynamic Method Resolution: Allows a method to be dynamically determined based on the object type during execution.`,
        code: `# Python code example
    
    class A:
        def greet(self):
            print("Hello from class A")
    
    class B:
        def greet(self):
            print("Hello from class B")
    
    class C(A, B):  # Multiple Inheritance
        pass
    
    obj = C()
    obj.greet()  # Output: Hello from class A (based on method resolution order)`
    },
    {
        title: "Inheritance",
        content: `Inheritance allows a class to inherit the attributes and methods of another class. The class that inherits is called the "child" or "subclass," and the class being inherited from is called the "parent" or "superclass."`,
        code: `# Python code example
    
    class Animal:
        def sound(self):
            print("Animal makes a sound")
    
    class Dog(Animal):  # Dog inherits from Animal
        def sound(self):
            print("Dog barks")
    
    dog = Dog()
    dog.sound()  # Output: Dog barks`
    },
    {
        title: "Polymorphism",
        content: `Polymorphism in OOP allows different classes to define methods with the same name but with different behaviors. This allows for flexibility in the code and the ability to interact with objects in a consistent way, regardless of their type.`,
        code: `# Python code example
    
    class Cat:
        def sound(self):
            print("Cat meows")
    
    class Dog:
        def sound(self):
            print("Dog barks")
    
    def make_sound(animal):
        animal.sound()
    
    cat = Cat()
    dog = Dog()
    
    make_sound(cat)  # Output: Cat meows
    make_sound(dog)  # Output: Dog barks`
    },
    {
        title: "Method Overriding",
        content: `Method overriding occurs when a subclass provides a specific implementation for a method that is already defined in its parent class. This allows the subclass to modify or extend the behavior of the inherited method.`,
        code: `# Python code example
    
    class Animal:
        def sound(self):
            print("Animal makes a sound")
    
    class Dog(Animal):
        def sound(self):  # Overriding the parent method
            print("Dog barks")
    
    dog = Dog()
    dog.sound()  # Output: Dog barks`
    },
    {
        title: "Superclass Methods",
        content: `To call a method from the parent class, you can use the super() function, which allows you to reference methods from the superclass. This is particularly useful in the case of method overriding.`,
        code: `# Python code example
    
    class Animal:
        def sound(self):
            print("Animal makes a sound")
    
    class Dog(Animal):
        def sound(self):
            super().sound()  # Call the superclass method
            print("Dog barks")
    
    dog = Dog()
    dog.sound()  
    # Output: Animal makes a sound
    #         Dog barks`
    },
    {
        title: "Working with Libraries in Python",
        content: `Libraries are collections of pre-written code that provide additional functionality for your programs. Python includes many built-in libraries, such as math, os, and random, which can be imported using the import keyword.`,
        code: `# Python code example
    
    import math
    result = math.sqrt(16)
    print(result)  # Output: 4.0`
    },
    {
        title: "Working with Packages in Python",
        content: `Packages are directories that contain multiple Python modules. You can organize your code into packages and import specific modules using the import statement. The __init__.py file is used to mark a directory as a package.`,
        code: `# Python code example
    
    # Assuming a directory structure:
    # mypackage/
    #    __init__.py
    #    module1.py
    
    from mypackage import module1`
    },
    {
        title: "Creating and Importing Python Modules",
        content: `Modules are individual Python files containing code that can be imported and reused in other Python programs. You can create your own modules by saving Python code in .py files and import them using import.`,
        code: `# Python code example
    
    # Create a module mymodule.py
    def greet(name):
        return f"Hello, {name}"
    
    # Import the module and use the function
    import mymodule
    print(mymodule.greet("Alice"))  # Output: Hello, Alice`
    },
    {
        title: "Python and Databases",
        content: `Python provides libraries such as sqlite3 and pymysql to interact with databases. You can connect to a database, execute queries, and manage data directly within Python programs.`,
        code: `# Python code example
    
    import sqlite3
    connection = sqlite3.connect('database.db')
    cursor = connection.cursor()
    cursor.execute("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, name TEXT)")
    connection.commit()`
    },
    {
        title: "Introduction to SQLite with Python",
        content: `SQLite is a lightweight, self-contained database engine. Python’s sqlite3 library provides a simple way to create, query, and manage SQLite databases. It is useful for small to medium-sized projects that require a local database.`,
        code: `# Python code example
    
    import sqlite3
    connection = sqlite3.connect('mydatabase.db')
    cursor = connection.cursor()
    cursor.execute("CREATE TABLE users (id INTEGER PRIMARY KEY, name TEXT)")
    cursor.execute("INSERT INTO users (name) VALUES ('Alice')")
    connection.commit()`
    }
    
//40 вопросов___________________________________________________________40 вопросов__________________________________________________________40 вопросов_____________________
    ,
    {
        title: "Advanced Database Operations",
        content: `Advanced database operations include techniques for optimizing your interactions with the database, such as using JOIN statements to combine data from multiple tables, handling transactions to ensure data consistency, and using indexing to speed up queries. Understanding how to perform these operations is essential for working with larger datasets and more complex applications.`,
        code: `# Python code example
    
    import sqlite3
    connection = sqlite3.connect('database.db')
    cursor = connection.cursor()
    
    # Creating two tables
    cursor.execute("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, name TEXT)")
    cursor.execute("CREATE TABLE IF NOT EXISTS orders (order_id INTEGER PRIMARY KEY, user_id INTEGER, product TEXT)")
    
    # Inserting data
    cursor.execute("INSERT INTO users (name) VALUES ('Alice')")
    cursor.execute("INSERT INTO orders (user_id, product) VALUES (1, 'Laptop')")
    
    # Performing a JOIN
    cursor.execute("SELECT users.name, orders.product FROM users JOIN orders ON users.id = orders.user_id")
    result = cursor.fetchall()
    print(result)  # Output: [('Alice', 'Laptop')]`
    },
    {
        title: "Database Handling Using SQLite in Python",
        content: `SQLite in Python allows for creating, reading, updating, and deleting (CRUD) operations. These are fundamental database operations, and Python provides an easy-to-use API to manage SQLite databases. You can use commands like INSERT, SELECT, UPDATE, and DELETE to interact with the data.`,
        code: `# Python code example
    
    import sqlite3
    connection = sqlite3.connect('database.db')
    cursor = connection.cursor()
    
    # Create table
    cursor.execute("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, name TEXT)")
    
    # Insert data
    cursor.execute("INSERT INTO users (name) VALUES ('Bob')")
    connection.commit()
    
    # Read data
    cursor.execute("SELECT * FROM users")
    print(cursor.fetchall())  # Output: [(1, 'Alice'), (2, 'Bob')]
    
    # Update data
    cursor.execute("UPDATE users SET name = 'Robert' WHERE id = 2")
    connection.commit()
    
    # Delete data
    cursor.execute("DELETE FROM users WHERE id = 1")
    connection.commit()`
    },
    {
        title: "Introduction to Data Science with Python",
        content: `Python has become one of the most popular languages for data science due to its powerful libraries and ease of use. With libraries like Pandas, Numpy, and Matplotlib, you can manipulate data, perform statistical analysis, and visualize results. Python is widely used for machine learning, statistical modeling, and data analysis.`,
        code: `# Python code example
    
    import pandas as pd
    data = {'Name': ['Alice', 'Bob', 'Charlie'], 'Age': [25, 30, 35]}
    df = pd.DataFrame(data)
    print(df)`
    },
    {
        title: "Working with Numpy for Data Science",
        content: `Numpy is a fundamental package for scientific computing in Python, providing support for arrays, matrices, and a wide range of mathematical functions. Numpy is used extensively in data science, machine learning, and numerical simulations because of its efficiency in handling large datasets and performing complex calculations.`,
        code: `# Python code example
    
    import numpy as np
    array = np.array([1, 2, 3, 4, 5])
    mean = np.mean(array)
    print(mean)  # Output: 3.0`
    },
    {
        title: "Data Analysis with Pandas",
        content: `Pandas is a powerful library for data manipulation and analysis. It provides flexible data structures such as DataFrames and Series to store and analyze data. With Pandas, you can handle data from various sources like CSV files, Excel spreadsheets, and SQL databases.`,
        code: `# Python code example
    
    import pandas as pd
    data = {'Name': ['Alice', 'Bob', 'Charlie'], 'Age': [25, 30, 35]}
    df = pd.DataFrame(data)
    df['Age'] = df['Age'] + 1  # Adding 1 to each person's age
    print(df)`
    },
    {
        title: "Numpy Library for Numerical Computations in Python",
        content: `Numpy excels at numerical operations on large data sets, providing a more efficient and powerful alternative to Python’s built-in list structures. It supports a wide range of mathematical, logical, and linear algebra operations that are crucial for data science and scientific computing.`,
        code: `# Python code example
    
    import numpy as np
    array = np.array([1, 2, 3])
    matrix = np.array([[1, 2], [3, 4]])
    product = np.dot(array, matrix)
    print(product)  # Output: [7 10]`
    },
    {
        title: "Introduction to Web Development with Python",
        content: `Python provides frameworks like Flask and Django to build web applications. Flask is a microframework that allows for quick development of small-scale applications, while Django is a full-fledged framework designed for larger applications with more built-in features.`,
        code: `# Python code example
    
    from flask import Flask
    
    app = Flask(__name__)
    
    @app.route('/')
    def hello_world():
        return "Hello, World!"
    
    if __name__ == '__main__':
        app.run()`
    },
    {
        title: "Building a Simple Web Application with Flask",
        content: `Flask allows developers to quickly build simple web applications with minimal setup. It is based on WSGI (Web Server Gateway Interface) and follows the MVC (Model-View-Controller) pattern. Flask is perfect for small to medium-sized projects and prototypes.`,
        code: `# Python code example
    
    from flask import Flask
    
    app = Flask(__name__)
    
    @app.route('/hello')
    def hello():
        return "Hello from Flask!"
    
    if __name__ == '__main__':
        app.run()`
    },
    {
        title: "Building a REST API with Flask",
        content: `Flask can be used to build RESTful APIs (Representational State Transfer), allowing web applications to communicate with other systems over the web. Flask provides easy tools to handle HTTP requests, process data, and return JSON responses.`,
        code: `# Python code example
    
    from flask import Flask, jsonify
    
    app = Flask(__name__)
    
    @app.route('/api/greet', methods=['GET'])
    def greet():
        return jsonify({'message': 'Hello, World!'})
    
    if __name__ == '__main__':
        app.run()`
    }
    
//50 вопросов___________________________________________________________50 вопросов__________________________________________________________50 вопросов_____________________

    ,
    {
        title: "Machine Learning with Python: Understanding the Basics of ML",
        content: `Machine learning is a field of artificial intelligence that involves creating algorithms that can learn from data. Python provides libraries like scikit-learn and TensorFlow to create and train models. In machine learning, you can perform tasks like classification, regression, and clustering.`,
        code: `# Python code example
    
    from sklearn.linear_model import LinearRegression
    import numpy as np
    
    # Example data
    X = np.array([[1], [2], [3], [4], [5]])  # Feature
    y = np.array([1, 2, 3, 4, 5])  # Target
    
    # Train the model
    model = LinearRegression()
    model.fit(X, y)
    
    # Make predictions
    predictions = model.predict([[6], [7]])
    print(predictions)  # Output: [6. 7.]`
    },
    {
        title: "Setting Up the Python Environment for Machine Learning",
        content: `To start working with machine learning in Python, you need to install libraries like numpy, pandas, scikit-learn, and matplotlib. These libraries provide the necessary tools for data manipulation, model building, and visualization.`,
        code: `# Command to install required libraries
    
    pip install numpy pandas scikit-learn matplotlib`
    },
    {
        title: "Machine Learning with Python: Data Loading and Preprocessing",
        content: `In machine learning, data preprocessing is an essential step that includes handling missing values, scaling numerical features, encoding categorical variables, and splitting data into training and testing sets. Pandas and scikit-learn provide convenient tools for preprocessing.`,
        code: `# Python code example
    
    import pandas as pd
    data = {'Age': [25, 30, None, 40]}
    df = pd.DataFrame(data)
    df['Age'] = df['Age'].fillna(df['Age'].mean())  # Filling missing values with the mean
    print(df)`
    },
    {
        title: "Supervised Learning Model",
        content: `Supervised learning is a type of machine learning where the model is trained on labeled data (input-output pairs). The goal is to learn the mapping between inputs and outputs to make predictions on new, unseen data. Common supervised learning models include linear regression, decision trees, and support vector machines (SVM).`,
        code: `# Python code example
    
    from sklearn.model_selection import train_test_split
    from sklearn.linear_model import LinearRegression
    
    # Sample data
    X = [[1], [2], [3], [4], [5]]
    y = [1, 2, 3, 4, 5]
    
    # Split the data into training and test sets
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
    
    # Create and train the model
    model = LinearRegression()
    model.fit(X_train, y_train)
    
    # Make predictions
    predictions = model.predict(X_test)
    print(predictions)`
    },
    {
        title: "Evaluating Machine Learning Model Performance",
        content: `Evaluating the performance of a machine learning model is essential to understand how well it performs on unseen data. Common evaluation metrics include accuracy, precision, recall, F1-score, and confusion matrix. These metrics help determine whether the model is making correct predictions and how it behaves with different classes.`,
        code: `# Python code example
    
    from sklearn.metrics import accuracy_score, precision_score
    
    # Sample true and predicted values
    y_true = [1, 0, 1, 1, 0]
    y_pred = [1, 0, 0, 1, 0]
    
    # Calculate accuracy and precision
    accuracy = accuracy_score(y_true, y_pred)
    precision = precision_score(y_true, y_pred)
    
    print(f"Accuracy: {accuracy}")
    print(f"Precision: {precision}")`
    }
    
    
];
