module.exports = function(grunt) {

  // 1. All configuration goes here 
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    concat: {
      dist: {
        src: [
          'public/libs/*.js', // All JS in the libs folder
          'public/modules/*/javascripts/*.js'  // specific module files
        ],
        dest: 'public/assets/javascripts/production.js',
      }
    },

    uglify: {
      build: {
        src: 'public/assets/javascripts/production.js',
        dest: 'public/assets/javascripts/production.min.js'
      }
    },

    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: 'img/',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'public/assets/img/build/'
        }]
      }
    },

    sass: {
      dist: {
        options: {
          style: 'compressed'
        },
        files: {
          'public/assets/stylesheets/app.css': 'public/assets/stylesheets/app.scss',
        }
      } 
    },

    autoprefixer: {
      dist: {
        files: {
          'public/assets/stylesheets/app.css': 'public/assets/stylesheets/app.css',
        }
      }
    },

    watch: {
      scripts: {
        files: ['public/assets/javascripts/*.js', 'public/modules/*.js', 'public/modules/*/javascripts/*.js'],
        tasks: ['concat', 'uglify'],
        options: {
          spawn: false,
          livereload: true,
        },
      },

      css: {
        files: ['public/assets/stylesheets/*.scss', 'public/modules/*/assets/css/*.scss'],
        tasks: ['sass', 'autoprefixer'],
        options: {
          spawn: false,
          livereload: true,
        }
      } 
    },

  });

  // 3. Where we tell Grunt we plan to use this plug-in.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-devtools');

  // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
  grunt.registerTask('default', ['concat', 'uglify', 'sass', 'imagemin']);

  grunt.registerTask('dev', ['watch']);

};
