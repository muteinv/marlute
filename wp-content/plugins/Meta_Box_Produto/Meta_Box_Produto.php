<?php
/*
  Plugin Name: Meta_Box_famatel
  Plugin URI: Quickdevelopers
  Description: Insert Meta Box in your places
  Version: 1.0
  Author: ipmaduranga
  Author URI: Quickdevelopers
 */
add_action('add_meta_boxes', 'woo_meta_box_add');
add_action('save_post', 'woo_meta_box_save');

function woo_meta_box_add() {
    add_meta_box('my-meta-box-id', 'Custom Post Type Settings', 'woo_custom_home_page_meta_box', 'page', 'normal', 'high');
    add_meta_box('my-meta-box-id', 'Custom Post Option', 'woo_custom_home_page_meta_box', 'slideshow', 'normal', 'high');
    add_meta_box('my-meta-box-id', 'Custom Post Option', 'woo_custom_home_page_meta_box', 'catalogos', 'normal', 'high');
    //add_meta_box('my-meta-box-id', 'Custom Post Type Settings', 'woo_custom_abonnement_page_meta_box', 'page', 'normal', 'high');
}
function woo_custom_home_page_meta_box(){
     global $post, $user;
wp_nonce_field('my_meta_box_nonce', 'meta_box_nonce'); 





if($post->ID == 125){
?>
<table>
  <tr>
        <td>
        <span class="column_title">Title 1: </span>
        </td>
        <td>
        <textarea name="cus_title_1" rows="1" cols="80" style="margin-left:0px;"><?php echo get_post_meta($post->ID, 'cus_title_1', TRUE); ?></textarea>     
        </td>
         </tr>
          <tr>
        <td>
        <span class="column_title">Text 2: </span>
        </td>
        <td>
         <textarea name="cus_title_2" rows="1" cols="80" style="margin-left:0px;"><?php echo get_post_meta($post->ID, 'cus_title_2', TRUE); ?></textarea>    
        </td>
    </tr>
          <tr>
        <td>
        <span class="column_title">Button Text: </span>
        </td>
        <td>
         <textarea name="cus_button_text" rows="1" cols="60" style="margin-left:0px;"><?php echo get_post_meta($post->ID, 'cus_button_text', TRUE); ?></textarea>    
        </td>
    </tr>
    
</table>
<?php
}
if($post->ID == 123){
?>
<table>
  <tr>
        <td>
        <span class="column_title">Title 1: </span>
        </td>
        <td>
        <textarea name="cus_title_forhim1" rows="1" cols="80" style="margin-left:0px;"><?php echo get_post_meta($post->ID, 'cus_title_forhim1', TRUE); ?></textarea>     
        </td>
         </tr>
          <tr>
        <td>
        <span class="column_title">Text 2: </span>
        </td>
        <td>
         <textarea name="cus_title_forhim2" rows="1" cols="80" style="margin-left:0px;"><?php echo get_post_meta($post->ID, 'cus_title_forhim2', TRUE); ?></textarea>    
        </td>
    </tr>
          <tr>
        <td>
        <span class="column_title">Button Text: </span>
        </td>
        <td>
         <textarea name="cus_button_text_forhim" rows="1" cols="60" style="margin-left:0px;"><?php echo get_post_meta($post->ID, 'cus_button_text_forhim', TRUE); ?></textarea>    
        </td>
    </tr>
    
</table>
<?php
}
?>
<?php     
}



function woo_meta_box_save($post_id) {
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE)
        return;
    if (!isset($_POST['meta_box_nonce']) || !wp_verify_nonce($_POST['meta_box_nonce'], 'my_meta_box_nonce'))
        return;
    if (!current_user_can('edit_post', $post_id))
        return "";

    if (isset($_POST['cus_title_1']))
        update_post_meta($post_id, 'cus_title_1', $_POST['cus_title_1']);
    if (isset($_POST['cus_title_2']))
        update_post_meta($post_id, 'cus_title_2', $_POST['cus_title_2']);
    if (isset($_POST['cus_button_text']))
        update_post_meta($post_id, 'cus_button_text', $_POST['cus_button_text']);
    if (isset($_POST['cus_title_forhim1']))
        update_post_meta($post_id, 'cus_title_forhim1', $_POST['cus_title_forhim1']);
    if (isset($_POST['cus_title_forhim2']))
        update_post_meta($post_id, 'cus_title_forhim2', $_POST['cus_title_forhim2']);
    if (isset($_POST['cus_button_text_forhim']))
        update_post_meta($post_id, 'cus_button_text_forhim', $_POST['cus_button_text_forhim']);

}


function woo_custom_product_meta_box() {
    global $post, $user;
    wp_nonce_field('my_meta_box_nonce', 'meta_box_nonce');
    ?>
    <style type="text/css">
        .inpt_title{
            float: left; width: 112px;
        }
        .span_tag_ttldes{
            color: #858585;
            font-style: italic;
            margin-left: 7px;
            font-weight: normal;
            font-size: 13px;
        }
        .input_tags input[type=text]{
            width: 81%;
        }
        .trck_lng input[type=text]{
            margin-left: 25px;
            margin-right: 8px;
            width: 45px;
        }
        .trck_lng{
            border-bottom: 1px solid #e3e3e3;
            margin-bottom: 12px;
            padding-bottom: 12px;
        }
        .mpupload{
            border-bottom: 1px solid #e3e3e3;
            margin-bottom: 12px;
            padding-bottom: 12px;
        }
        .column_title{
            float: left;
            width: 162px;  
        }
    </style>
    <script>
        jQuery(document).ready(function() {
            var post_id = '<?php echo $post->ID; ?>';
            var uploader = null;
            //multiple images for sliseshow
            jQuery('.mp3_file_uploader').click(function() {

                uploader = jQuery('.mp3_file_url');

                tb_show('', 'media-upload.php?post_id=' + post_id + '&amp;type=file&amp;TB_iframe=true');

                return false;
            });

            window.send_to_editor = function(html)
            {

                a = jQuery('a', html).attr('href');
                if (jQuery(a).length == 0) {
                    a = jQuery(html).attr('href'); // We do this to get Links like PDF's
                }
                uploader.val(a);
                tb_remove();
            };
        });
    </script>
    <p class="mpupload">
        <input type="text" class="mp3_file_url" value="<?php echo get_post_meta($post->ID, 'woo_mp3_file_url', TRUE); ?>"/> 
        <input type="hidden" name="woo_mp3_file_url" class="mp3_file_url" value="<?php echo get_post_meta($post->ID, 'woo_mp3_file_url', TRUE); ?>"/> 
        <span class="column_title" >Audiole (mp3)</span> <span class="button button-primary mp3_file_uploader">Browser</span> <span class="span_tag_ttldes">Upload le for streaming</span>
    </p>
    <p class="trck_lng">
        <span class="column_title">Track length</span> <input style="margin-left:0px;" type="text" name="woo_track_minutes" value="<?php echo get_post_meta($post->ID, 'woo_track_minutes', TRUE); ?>"/>minutes <input type="text" name="woo_track_seconds" value="<?php echo get_post_meta($post->ID, 'woo_track_seconds', TRUE); ?>"/> seconds
    </p>
    <p class="">
        <span class="column_title">Track Mix</span> 
        <input style="margin-left:0px;" type="text" name="woo_track_mix" value="<?php echo get_post_meta($post->ID, 'woo_track_mix', TRUE); ?>"/>
    </p>
    <p style="font-size: 15px;font-weight: bold;">Tags <span class="span_tag_ttldes">(separate all tags with commas)</span></p>
    <div class="input_tags">
        <p><span class="inpt_title">Mood</span><input type="text" name="woo_product_tag_mood" value="<?php echo get_post_meta($post->ID, 'woo_product_tag_mood', TRUE); ?>"/></p>
        <p><span class="inpt_title">Musical Style</span><input type="text" name="woo_product_tag_musical_style" value="<?php echo get_post_meta($post->ID, 'woo_product_tag_musical_style', TRUE); ?>"/></p>
        <p><span class="inpt_title">Instrumentation</span><input type="text" name="woo_product_tag_instrumentation" value="<?php echo get_post_meta($post->ID, 'woo_product_tag_instrumentation', TRUE); ?>"/></p>

    </div>  
    <?php
}