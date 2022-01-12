pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
        stage('SonarQube analysis'){
            steps {
                dir('E:/Desktop/ramos/MINGESO/proyecto2/Frontend/Tingeso-FrontEnd'){
                    withSonarQubeEnv('sonarqube'){
                        sh 'chmod +x ./gradlew'
                        sh './gradlew sonarqube'
                    }
                }
            }
        }
    }
}