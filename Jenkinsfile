pipeline {
    agent any
    environment {
        CI = 'true'
    }
    stages {     
        stage('Prepare') {
            sh "npm install -g yarn"
        }        
        stage('Build') {
            steps {
                sh 'yarn install'
            }
        }
        stage('Generate') {
            steps {
                sh 'yarn generate'
            }
        }        
        stage('Deliver for development') {
            when {
                branch 'development'
            }
            steps {
                input message: 'Published on development'
            }
        }
        stage('Deliver for staging') {
            when {
                branch 'staging'
            }
            steps {
                input message: 'Published on staging'
            }
        }        
        stage('Deploy for production') {
            when {
                branch 'production'
            }
            steps {
                input message: 'Published on production'
            }
        }
    }
}