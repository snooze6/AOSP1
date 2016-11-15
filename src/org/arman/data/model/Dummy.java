package org.arman.data.model;

import java.util.ArrayList;
import java.util.Arrays;

/**
 * Created by Snooze on 15/11/2016.
 */
public class Dummy {

    // Items of the shop
    public static Item[] items = new Item[]{
        new Item(
                1,
                "Disorder",
                10.0f,
                "All hail yui-sama",
                // 400x400
                "https://1.bp.blogspot.com/-s0q785eC97c/VyA04Hk7HJI/AAAAAAAAR_Y/Qiti7fX2b2IdtMa5UzoeK9-nd99-OU3TACLcB/s400/Cover.jpg",
                "Yousei Teikoku",
                //800x350
                "imgs/yousei.png"
        ),
        new Item(
                2,
                "Pax Vesania",
                10.0f,
                "All hail yui-sama",
                "http://d2ydh70d4b5xgv.cloudfront.net/images/3/0/new-yousei-teikoku-pax-vesania-cd-japan-laca-15285-4540774152858-f-s-680e4d4f55b6446af7f8d917cb5f664c.jpg",
                "Yousei Teikoku",
                "imgs/yousei.png"
        ),
        new Item(
                3,
                "Kyūsei Argyros",
                10.0f,
                "All hail yui-sama",
                "http://1.bp.blogspot.com/-tLkeGtocy3c/U-cZXOKNVfI/AAAAAAAAHIQ/fIP4YtN8lVs/s400/COVER.jpg",
                "Yousei Teikoku",
                "imgs/yousei.png"
        ),
        new Item(
                4,
                "GO GO Summer!",
                13.0f,
                "KPOP is good to",
                "http://a2.mzstatic.com/jp/r30/Music/v4/37/a2/a3/37a2a337-219f-dacc-b53a-874d7a9eacdb/cover400x400.jpeg",
                "Kara",
                "http://www.tctelevision.com/elnoticiero/sites/default/files/styles/large/public/img-articulo/kara-5-jewel-cf-g.jpg?itok=qKO3dEcB"
        ),
        new Item(
                5,
                "Evil Empire",
                13.0f,
                "For lud",
                "http://www.sputnikmusic.com/images/albums/112.jpg",
                "Rage Against the Machine",
                "http://www.theprp.com/wp-content/uploads/2015/02/zackrtj-800x350.jpg"
        ),
        new Item(
                6,
                "Banana brain",
                13.0f,
                "South Africa Rules!",
                "http://www.faygoluvers.net/v5/wp-content/uploads/2016/09/5HD8G04j-400x400.jpg",
                "Die Antwoord",
                "http://myspiltmilk.com/sites/default/files/inline-images/bukufriday2015.a.patrick.ainsworth-2677.jpg"
        ),
        new Item(
                7,
                "Mejor que el silencio",
                14.0f,
                "La vida es como una tela bordada: Nos pasamos la primera parte de la vida en el lado bonito del bordado, pero la segunda parte de nuestra vida la pasamos en el otro lado; es menos bonito, pero vemos como están dispuestos los hilos\n",
                "http://images.shazam.com/coverart/t53434262_s400.jpg",
                "Nach",
                "http://i419.photobucket.com/albums/pp278/joros7/Biografias/nach-scratch.jpg"
        ),
    };

    public static ArrayList<User> users = new ArrayList<User>(
            Arrays.asList(
                    new User("admin", "admin"),
                    new User("user", "user"),
                    new User("root", "toor"),
                    new User("armando", "armando"),
                    new User("juan","juan")
            )
    );


}
