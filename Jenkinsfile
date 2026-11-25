pipeline {
    agent any

 environment {
    DOCKER_EXE     = '"C:\\Users\\Samrakshini G\\AppData\\Local\\Programs\\DockerDesktop\\resources\\bin\\docker.exe"'
    IMAGE_NAME     = "samrakshini-g/node-cicd-app"
    IMAGE_TAG      = "${env.BUILD_NUMBER}"
    CONTAINER_NAME = "node-cicd-container"
}
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm ci'
            }
        }

        stage('Run Unit Tests') {
            steps {
                bat 'npm test'
            }
        }

        stage('Build Docker Image') {
            steps {
                bat "%DOCKER_EXE% build -t %IMAGE_NAME%:%IMAGE_TAG% -t %IMAGE_NAME%:latest ."
            }
        }

        stage('Deploy Container') {
            steps {
                bat """
                    %DOCKER_EXE% stop %CONTAINER_NAME% 2>nul || exit 0
                    %DOCKER_EXE% rm %CONTAINER_NAME% 2>nul || exit 0
                    %DOCKER_EXE% run -d --name %CONTAINER_NAME% -p 3000:3000 %IMAGE_NAME%:%IMAGE_TAG%
                """
            }
        }
    }

    post {
        success {
            echo "Build #${env.BUILD_NUMBER} succeeded and deployed!"
        }
        failure {
            echo "Build #${env.BUILD_NUMBER} failed. Deployment stopped."
        }
    }
}