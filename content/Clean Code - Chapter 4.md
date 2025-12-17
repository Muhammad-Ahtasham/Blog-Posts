---
title: "Clean Code – Chapter 4: Comments"
description: "A detailed summary of Chapter 4 from Clean Code by Robert C. Martin, explaining why comments are often a sign of bad code, when they are justified, and how to write useful comments without harming code readability."
slug: clean-code-chapter-4
date: 11/02/2025
author: Robert C. Martin
image: https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1
---

# Chapter 4: Comments — A Detailed Summary

Chapter 4 challenges the common belief that comments are always good. The author argues that **comments are often a failure**, used when code does not clearly express intent. While comments can be useful in rare cases, clean code should minimize the need for them by being self-explanatory.

## Comments Are Not a Substitute for Clean Code

Comments exist to compensate for poor naming, unclear structure, or complex logic. Instead of adding comments, developers should strive to **rewrite the code so it explains itself**. Code changes, but comments often do not, leading to misleading or outdated documentation.

## The Proper Use of Comments

Comments should be used sparingly and only when they add value that cannot be expressed through code. Good comments explain **why something is done**, not **what the code does**. The “what” should already be obvious from well-written code.

## Legal Comments

Some comments are necessary for legal reasons, such as copyright notices or licensing information. These comments are acceptable but should be kept concise and not clutter the code unnecessarily.

## Informative Comments

Comments can be useful to explain complex information that is not obvious from the code itself, such as:
- Regular expressions
- Mathematical formulas
- External system constraints

These comments should be clear, accurate, and precise.

## Explanation of Intent

Sometimes comments are useful to explain the intent behind a decision. They help future developers understand *why* a particular approach was chosen, especially when the reasoning is not obvious from the implementation.

## Clarification Comments

Clarification comments may help when code interacts with obscure APIs or relies on non-obvious behavior. However, the author emphasizes that improving naming or structure is usually a better solution than adding clarifying comments.

## Warning of Consequences

Comments can be valuable when warning about important side effects, limitations, or dangerous behavior. These comments help prevent misuse and protect against subtle bugs.

## TODO Comments

TODO comments are acceptable when used responsibly. They highlight:
- Missing features
- Temporary solutions
- Known limitations

However, they should be tracked and resolved over time, not ignored indefinitely.

## Amplification Comments

Comments can sometimes emphasize the importance of a piece of code that might otherwise be overlooked. These should be used rarely and only when truly necessary.

## Bad Comments: Redundant Comments

Redundant comments simply repeat what the code already states. They add noise and make code harder to read without providing new information.

## Bad Comments: Misleading Comments

Misleading comments are dangerous. When comments are outdated or incorrect, they actively harm understanding and lead to bugs. This is one of the strongest arguments against excessive commenting.

## Bad Comments: Mandated Comments

Requiring comments for every variable or function leads to meaningless, low-quality documentation. Comments should be written because they are useful, not because a rule demands them.

## Bad Comments: Journal and Noise Comments

Comments that log changes or add filler text clutter the code. Version control systems already track history, making such comments unnecessary and harmful.

## Bad Comments: Commented-Out Code

Commented-out code should be deleted. Keeping dead code confuses readers and creates uncertainty. Version control systems can always retrieve old implementations if needed.

## The Truth About Comments

Comments do not make up for bad code. They can lie, decay, and mislead over time. The best comment is **no comment at all**, when code is written clearly enough to explain itself.

## Chapter 4 Core Takeaways

Comments should be used as a last resort. Clean code expresses intent through meaningful names, small functions, and clear structure. When comments are necessary, they should explain intent, warn of consequences, or provide essential clarification. Excessive or redundant comments are a sign that the code itself needs improvement.

---

**End of Chapter 4 Summary**
