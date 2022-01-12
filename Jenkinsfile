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

                        bat 'chmod +x ./gradlew'
                        bat './gradlew sonarqube'
                    }
                }
            }
        }
    }
}