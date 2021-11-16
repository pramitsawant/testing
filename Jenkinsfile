pipeline {
    agent {
        docker {
            image 'pramitsawant11/node-14.17.3-git:latest'
        }
    }
    environment {
        CI = 'true'
    }
    stages {
        stage('Initialize'){
                def dockerHome = tool 'myDocker'
                env.PATH = "${dockerHome}/bin:${env.PATH}"
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