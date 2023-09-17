const router = require('express').Router();
const { Post } = require('../models');
const withAuth = require('../utils/auth');


router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll();

    const posts = postData.map((post) =>
      post.get({ plain: true })
    );

    res.render('homepage', {
      posts,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


router.get('/post/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: Post,
          attributes: [
            'title',
            'content',
            'name',
            'post_date',
            'comment',
            
          ],
        },
      ],
    });

    const post = postData.get({ plain: true });
    res.render('posts', { post, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/posts', withAuth, async (req, res) => {
  try {
    const postData = await Post.findAll({
      where: {user_id: req.session.user_id}
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    res.render('posts', {
      posts,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/posts/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      update: comment,
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    res.render('posts', {
      posts,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});




module.exports = router;
