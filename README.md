# Design Patterns

## Description
This repository contains a collection of design patterns implemented in Typescript. Each design pattern is implemented in a separate package. The `main` method of each class contains a simple example of how to use the design pattern.

## Table of Contents
- [Design Patterns Used](#design-patterns-used)
- [Installation](#installation)
- [Usage](#usage)
- [Examples](#examples)
- [Contributing](#contributing)


## Design Patterns Used
List the design patterns that are implemented in your project. Explain why you chose these design patterns and how they contribute to your project's architecture.

| Category          | Pattern                     | Description                                                                                                                                                 |
|-------------------|-----------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Creational**    | Singleton                   | Ensures a class has only one instance and provides a global point of access to it.                                                                          |
|                   | Factory Method              | Defines an interface for creating objects but allows subclasses to alter the type of objects created.                                                       |
|                   | Abstract Factory            | Provides an interface for creating families of related or dependent objects without specifying their concrete classes.                                      |
|                   | Builder                     | Separates the construction of complex objects from their representation, allowing the same construction process to create different representations.        |
| **Structural**    | Adapter                     | Allows the interface of an existing class to be used as another interface.                                                                                  |
|                   | Flyweight                   | Reduces the cost of creating and manipulating a large number of similar objects.                                                                            | 
|                   | Decorator                   | Attaches additional responsibilities to an object dynamically, providing a flexible alternative to subclassing for extending functionality.                 |
|                   | Composite                   | Composes objects into tree structures to represent part-whole hierarchies, enabling clients to treat individual objects and compositions uniformly.         |
|                   | Proxy                       | Provides a surrogate or placeholder for another object to control access to it.                                                                             |
| **Behavioral**    | Observer                    | Defines a one-to-many dependency between objects, ensuring that when one object changes state, all its dependents are notified and updated.                 |
|                   | Strategy                    | Defines a family of algorithms, encapsulates each one, and makes them interchangeable, allowing algorithms to vary independently from clients.              |
|                   | Command                     | Encapsulates a request as an object, enabling parameterization of clients with queues, requests, and operations.                                            |
|                   | State                       | Allows an object to alter its behavior when its internal state changes, making the object appear to change its class.                                       |
| **Architectural** | MVC (Model-View-Controller) | Separates an application into three interconnected components: Model (data and business logic), View (user interface), and Controller (handles user input). |
|                   | MVVM (Model-View-ViewModel) | Similar to MVC but introduces a ViewModel to separate the View and the Model more effectively.                                                              |
|                   | Dependency Injection (DI)   | Provides a way to pass dependencies (e.g., services, configurations, objects) into a class rather than having the class create them itself.                 |
|                   | Repository                  | Separates the logic that retrieves data from a database or data source from the rest of the application.                                                    |
| **Concurrency**   | Producer-Consumer           | Manages the efficient sharing of data between producer and consumer threads.                                                                                |
|                   | Mutex and Semaphore         | Mechanisms for managing concurrent access to shared resources.                                                                                              |
|                   | Thread Pool                 | Manages a pool of worker threads to efficiently execute asynchronous tasks.                                                                                 |
| **Anti-Patterns** | Singleton Anti-Pattern      | Overusing singletons where not necessary, leading to tight coupling and maintainability issues.                                                             |
|                   | God Object Anti-Pattern     | Creating a single class that does everything, resulting in code that's hard to understand and maintain.                                                     |
|                   | Spaghetti Code Anti-Pattern | Unstructured and tangled code that's difficult to read and debug.                                                                                           |



### Installation
```
npm install 
npm install -g ts-node
```

## Usage
You can find in each pattern folder a `main.ts` file that contains a simple example of how to use the design pattern.


## Examples
```
cd Strategy
ts-node main.ts
```

## Contributing
You can contribute to this project by adding new design patterns or improving the existing ones. This repo is public and open to everyone. If you want to contribute, please send me a pull request.
