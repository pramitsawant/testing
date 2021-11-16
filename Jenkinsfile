pipeline {
    agent {
        docker {
            image 'pramitsawant11/node-14.17.3-git:latest'
            args '-p 3000:3000 -p 5000:5000'
        }
    }
    environment {
        CI = 'true'
    }
    stages {
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