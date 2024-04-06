# ngrx-example-transformed

![Vercel](http://therealsujitk-vercel-badge.vercel.app/?app=ngrx-example-transformed)
[![Sonarcloud Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=bitsmuggler_ngrx-example-transformed&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=bitsmuggler_ngrx-example-transformed)
![ngrx-example-transformed CI Status](https://github.com/bitsmuggler/ngrx-example-transformed/actions/workflows/build.yml/badge.svg)

This repository contains the NgRx example for the following blog post: [What is NgRx and why is it used in Angular apps?](https://www.workingsoftware.dev/what-is-ngrx-and-why-is-it-used-in-angular/)

![Screenshot ngrx-example-transformed demo](https://raw.githubusercontent.com/bitsmuggler/ngrx-example-transformed/main/demo-app-screenshot.png)

Demo: [https://ngrx-example-transformed.vercel.app](https://ngrx-example-transformed.vercel.app)


This example will help you understand how to use the [NgRx](https://ngrx.io/) framework.

From a business perspective, it is a product catalog with a shopping cart. You can add items to the cart and then remove them.

It contains the following technical aspects:

* Using Store, Actions / ActionGroups, Selectors, Reducers, and Effects in an Angular application.
* Introduction of feature stores.
* Sample tests for these [NgRx](https://ngrx.io/) elements.

In addition to Angular Framework and [NgRx](https://ngrx.io/), it uses the following supporting frameworks & tools:

* [Angular Material](https://material.angular.io/) for the UI-stuff.
* [shallow-render](https://github.com/getsaf/shallow-render) for reducing boilerplate test code.
* [Vercel](https://vercel.com/) for deploying the demo application
* [SonarCloud](https://sonarcloud.io/) for continuous static code analysis
* [GitHub Actions](https://github.com/features/actions) for running the tests.
