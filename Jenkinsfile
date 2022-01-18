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
                dir("/var/lib/jenkins/workspace/front/frontend"){
                    sh 'rm -rf .scannerwork'
                    sh 'npm install'
                    withSonarQubeEnv('sonarqube'){
                        sh 'npm run sonarqube'
                    }
                }
            }
        }
        
        stage('Build-frontend'){
            steps{
                dir("/var/lib/jenkins/workspace/front/frontend") {
                    sh "docker build . -t front"
                }
            }
        }
        
    }
}