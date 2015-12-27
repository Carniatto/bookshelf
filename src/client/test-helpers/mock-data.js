/* jshint -W079, -W101*/
var mockData = (function() {
    return {
        getMockBooks: getMockBooks,
        getMockBook: getMockBook,
        getMockGenres: getMockGenres,
        getMockCategories: getMockCategories,
        getMockRelated: getMockRelated,
        getMockStates: getMockStates
    };

    function getMockStates() {
        return [
            {
                state: 'dashboard',
                config: {
                    url: '/',
                    templateUrl: 'app/dashboard/dashboard.html',
                    title: 'dashboard',
                    settings: {
                        nav: 1,
                        content: '<i class="fa fa-dashboard"></i> Dashboard'
                    }
                }
            }
        ];
    }

    function getMockGenres() {
        return ['History', 'Arts', 'Christian Books', 'Fantasy', 'Technology'];
    }

    function getMockCategories() {
        return ['Non-Fiction', 'Fiction'];
    }

    function getMockBook() {
        return {
            'author': {
                'avatar': 'http://lorempixel.com/250/250/',
                'name': 'JRR Tolkein'
            },
            'cover': 'http://lorempixel.com/500/700/',
            'genre': {
                'category': 'Non-Fiction',
                'name': 'History'
            },
            'id': 'b841267346',
            'likes': 816,
            'name': 'The Lord of the Rings',
            'published': '2003-09-18T01:59:14.918Z'
        };
    }

    function getMockRelated() {
        return [{
            'author': {
                'avatar': 'http://lorempixel.com/250/250/',
                'name': 'JD Salinger'
            },
            'cover': 'http://lorempixel.com/500/700/',
            'description': 'Expelled from a \"phony\" prep school, adolescent anti-hero goes through a difficult phase.',
            'genre': {
                'category': 'Non-Fiction',
                'name': 'History'
            },
            'id': 'b637123441',
            'introduction': [
                {
                    'content': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus pretium ante, eu condimentum nulla pretium nec. Nunc lacus ligula, tincidunt eu diam non, varius viverra tortor. Sed interdum arcu id molestie cursus. Sed vel pharetra enim. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas vitae nisl faucibus, auctor tortor nec, finibus nunc. Maecenas vel orci facilisis, consectetur libero nec, faucibus purus. Vivamus sed sapien in dui tempor lacinia. Vestibulum at tempus ligula. Nam at sem sed velit venenatis tempor.'
                },
                {
                    'content': 'Integer pretium quam et venenatis pellentesque. Vivamus non congue risus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque purus nisi, facilisis et imperdiet et, consectetur nec sapien. Fusce lobortis non felis eu volutpat. Aliquam eget dapibus eros, in ultricies dui. Etiam quis ante a tortor fermentum eleifend ac nec elit.'
                },
                {
                    'content': 'Curabitur ultrices accumsan purus, at sagittis dolor. Etiam eleifend scelerisque mi eu dapibus. Cras ut turpis vestibulum, varius nisl vel, sodales ante. Quisque vulputate dignissim felis. Pellentesque sagittis ultricies erat at dictum. Nam augue metus, efficitur id feugiat eu, lobortis scelerisque turpis. Donec maximus, dolor quis lacinia iaculis, lacus libero condimentum tortor, id porttitor quam tortor nec massa. Ut dignissim nibh ante, id suscipit turpis blandit in. Nam mauris dolor, eleifend nec consequat placerat, tempor in neque. Nulla semper, arcu nec ultrices mattis, nibh mauris ornare mauris, eu tristique nibh neque sit amet justo. Praesent sollicitudin in tortor ac iaculis. Nunc non eros urna.'
                },
                {
                    'content': 'Donec at tempus augue. Sed nec efficitur arcu. Nam eu aliquet felis, vitae feugiat mauris. Integer eget quam nec ligula venenatis aliquet. Cras aliquam odio quis orci elementum, vitae interdum dui efficitur. Vivamus sed nisi lorem. Mauris varius, augue at pellentesque laoreet, turpis metus viverra urna, id vulputate erat lacus a diam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras vitae blandit arcu. Proin rutrum ante nisi, et porttitor lectus egestas at. Donec sit amet pharetra neque. Interdum et malesuada fames ac ante ipsum primis in faucibus.'
                },
                {
                    'content': 'Sed feugiat metus arcu, quis porttitor mauris cursus et. In eget interdum justo, nec commodo dui. In hac habitasse platea dictumst. Quisque eget ipsum non lectus mattis efficitur non et est. Suspendisse vehicula massa venenatis sodales commodo. Donec commodo pellentesque felis, a bibendum turpis mattis ut. Cras volutpat quam vitae cursus elementum.'
                }
            ],
            'likes': 138,
            'name': 'The Catcher in the Rye',
            'published': '2012-03-21T06:21:00.044Z'
        },
        {
            'author': {
                'avatar': 'http://lorempixel.com/250/250/',
                'name': 'Mark Twain'
            },
            'cover': 'http://lorempixel.com/500/700/',
            'description': 'A boy and a runaway slave set sail on the Mississippi, away from Antebellum \'sivilisation\'.',
            'genre': {
                'category': 'Non-Fiction',
                'name': 'History'
            },
            'id': 'b566703762',
            'introduction': [
                {
                    'content': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus pretium ante, eu condimentum nulla pretium nec. Nunc lacus ligula, tincidunt eu diam non, varius viverra tortor. Sed interdum arcu id molestie cursus. Sed vel pharetra enim. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas vitae nisl faucibus, auctor tortor nec, finibus nunc. Maecenas vel orci facilisis, consectetur libero nec, faucibus purus. Vivamus sed sapien in dui tempor lacinia. Vestibulum at tempus ligula. Nam at sem sed velit venenatis tempor.'
                },
                {
                    'content': 'Integer pretium quam et venenatis pellentesque. Vivamus non congue risus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque purus nisi, facilisis et imperdiet et, consectetur nec sapien. Fusce lobortis non felis eu volutpat. Aliquam eget dapibus eros, in ultricies dui. Etiam quis ante a tortor fermentum eleifend ac nec elit.'
                },
                {
                    'content': 'Curabitur ultrices accumsan purus, at sagittis dolor. Etiam eleifend scelerisque mi eu dapibus. Cras ut turpis vestibulum, varius nisl vel, sodales ante. Quisque vulputate dignissim felis. Pellentesque sagittis ultricies erat at dictum. Nam augue metus, efficitur id feugiat eu, lobortis scelerisque turpis. Donec maximus, dolor quis lacinia iaculis, lacus libero condimentum tortor, id porttitor quam tortor nec massa. Ut dignissim nibh ante, id suscipit turpis blandit in. Nam mauris dolor, eleifend nec consequat placerat, tempor in neque. Nulla semper, arcu nec ultrices mattis, nibh mauris ornare mauris, eu tristique nibh neque sit amet justo. Praesent sollicitudin in tortor ac iaculis. Nunc non eros urna.'
                },
                {
                    'content': 'Donec at tempus augue. Sed nec efficitur arcu. Nam eu aliquet felis, vitae feugiat mauris. Integer eget quam nec ligula venenatis aliquet. Cras aliquam odio quis orci elementum, vitae interdum dui efficitur. Vivamus sed nisi lorem. Mauris varius, augue at pellentesque laoreet, turpis metus viverra urna, id vulputate erat lacus a diam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras vitae blandit arcu. Proin rutrum ante nisi, et porttitor lectus egestas at. Donec sit amet pharetra neque. Interdum et malesuada fames ac ante ipsum primis in faucibus.'
                },
                {
                    'content': 'Sed feugiat metus arcu, quis porttitor mauris cursus et. In eget interdum justo, nec commodo dui. In hac habitasse platea dictumst. Quisque eget ipsum non lectus mattis efficitur non et est. Suspendisse vehicula massa venenatis sodales commodo. Donec commodo pellentesque felis, a bibendum turpis mattis ut. Cras volutpat quam vitae cursus elementum.'
                }
            ],
            'likes': 576,
            'name': 'The Adventures of Huckleberry Finn',
            'published': '1985-09-04T10:35:25.254Z'
        },
        {
            'author': {
                'avatar': 'http://lorempixel.com/250/250/',
                'name': 'Miguel de Cervantes'
            },
            'cover': 'http://lorempixel.com/500/700/',
            'description': 'Picaresque tale about quinquagenarian gent on a skinny horse tilting at windmills.',
            'genre': {
                'category': 'Non-Fiction',
                'name': 'History'
            },
            'id': 'b818726264',
            'introduction': [
                {
                    'content': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus pretium ante, eu condimentum nulla pretium nec. Nunc lacus ligula, tincidunt eu diam non, varius viverra tortor. Sed interdum arcu id molestie cursus. Sed vel pharetra enim. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas vitae nisl faucibus, auctor tortor nec, finibus nunc. Maecenas vel orci facilisis, consectetur libero nec, faucibus purus. Vivamus sed sapien in dui tempor lacinia. Vestibulum at tempus ligula. Nam at sem sed velit venenatis tempor.'
                },
                {
                    'content': 'Integer pretium quam et venenatis pellentesque. Vivamus non congue risus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque purus nisi, facilisis et imperdiet et, consectetur nec sapien. Fusce lobortis non felis eu volutpat. Aliquam eget dapibus eros, in ultricies dui. Etiam quis ante a tortor fermentum eleifend ac nec elit.'
                },
                {
                    'content': 'Curabitur ultrices accumsan purus, at sagittis dolor. Etiam eleifend scelerisque mi eu dapibus. Cras ut turpis vestibulum, varius nisl vel, sodales ante. Quisque vulputate dignissim felis. Pellentesque sagittis ultricies erat at dictum. Nam augue metus, efficitur id feugiat eu, lobortis scelerisque turpis. Donec maximus, dolor quis lacinia iaculis, lacus libero condimentum tortor, id porttitor quam tortor nec massa. Ut dignissim nibh ante, id suscipit turpis blandit in. Nam mauris dolor, eleifend nec consequat placerat, tempor in neque. Nulla semper, arcu nec ultrices mattis, nibh mauris ornare mauris, eu tristique nibh neque sit amet justo. Praesent sollicitudin in tortor ac iaculis. Nunc non eros urna.'
                },
                {
                    'content': 'Donec at tempus augue. Sed nec efficitur arcu. Nam eu aliquet felis, vitae feugiat mauris. Integer eget quam nec ligula venenatis aliquet. Cras aliquam odio quis orci elementum, vitae interdum dui efficitur. Vivamus sed nisi lorem. Mauris varius, augue at pellentesque laoreet, turpis metus viverra urna, id vulputate erat lacus a diam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras vitae blandit arcu. Proin rutrum ante nisi, et porttitor lectus egestas at. Donec sit amet pharetra neque. Interdum et malesuada fames ac ante ipsum primis in faucibus.'
                },
                {
                    'content': 'Sed feugiat metus arcu, quis porttitor mauris cursus et. In eget interdum justo, nec commodo dui. In hac habitasse platea dictumst. Quisque eget ipsum non lectus mattis efficitur non et est. Suspendisse vehicula massa venenatis sodales commodo. Donec commodo pellentesque felis, a bibendum turpis mattis ut. Cras volutpat quam vitae cursus elementum.'
                }
            ],
            'likes': 720,
            'name': 'Don Quixote',
            'published': '2005-03-14T23:16:26.304Z'
        }];
    }

    function getMockBooks() {
        return [{
            'author': {
                'avatar': 'http://lorempixel.com/250/250/',
                'name': 'JRR Tolkein'
            },
            'cover': 'http://lorempixel.com/500/700/',
            'genre': {
                'category': 'Non-Fiction',
                'name': 'History'
            },
            'id': 'b841267346',
            'likes': 816,
            'name': 'The Lord of the Rings',
            'published': '2003-09-18T01:59:14.918Z'
        }, {
            'author': {
                'avatar': 'http://lorempixel.com/250/250/',
                'name': 'Harper Lee'
            },
            'cover': 'http://lorempixel.com/500/700/',
            'genre': {
                'category': 'Non-Fiction',
                'name': 'Arts'
            },
            'id': 'b284012025','likes': 221,
            'name': 'To Kill a Mockingbird',
            'published': '2012-12-12T15:59:48.420Z'
        }, {
            'author': {
                'avatar': 'http://lorempixel.com/250/250/',
                'name': 'Rabindranath Tagore'
            },
            'cover': 'http://lorempixel.com/500/700/',
            'description': 'A rich Bengali noble lives happily until a radical revolutionary appears.',
            'genre': {
                'category': 'Non-Fiction',
                'name': 'Christian Books'
            },
            'id': 'b283256024',
            'likes': 484,
            'name': 'The Home and the World',
            'published': '1977-09-28T18:27:52.687Z'
        }];
    }
})();
