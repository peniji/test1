
pipeline {
    agent any

    tools {
        maven 'Maven'   // Must match the name in Jenkins Global Tool Configuration
    }

    stages {

        stage('Checkout') {
            steps {
                echo 'Checking out source code from GitHub...'
                checkout scm
            }
        }

        stage('Maven Build') {
            steps {
                echo 'Running Maven build...'
                sh 'mvn clean package'
            }
        }
    
       stage('Build Docker Image') {
            steps {
                echo 'Building Docker image...'
                sh 'docker build -t hello-node-app:latest .'
            }
        }
    }
    }