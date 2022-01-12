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
                dir("C:/Program Files/Jenkins"){
                    withSonarQubeEnv('sonarqube'){
                        def workspace = pwd()
                        sh 'chmod +x ./gradlew'
                        sh './gradlew sonarqube'
                    }
                }
            }
        }
    }
}