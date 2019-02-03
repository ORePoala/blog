webpackJsonp([72316915199843],{750:function(e,t){e.exports={data:{post:{id:"/home/brute4s99/DEV/repos/blog/content/posts/2019-02-03--arch/index.md absPath of file >>> MarkdownRemark",html:'<p align=\'center\'><img src="" alt="Arch"><br>\n<font size=2>Arch</font></p>\n<blockquote>\n<p align="center"><b>Arching it out </b></p>\n</blockquote>\n<ol>\n<li>So I had a happy system with Arch Linux, until I needed Windows 10 for some Windows development.</li>\n<li>Then I installed Windows 10 UEFI with Rufus.</li>\n<li>Then I had a happy system with Arch Linux and Windows 10.</li>\n<li>Then I needed a ubuntu based OS for some testing puposes. I decided to triple boot.</li>\n<li>I went for Zorin OS 12.4 CORE, it’s a beautiful distro, you must check it out!</li>\n<li>I simply installed it on a separate ext4 partition at the end of my HDD (using that <code class="language-text">something else</code> option)</li>\n</ol>\n<blockquote>\n<p>it <em>might</em> have did something to my prior GRUB config of Arch Linux.</p>\n</blockquote>\n<ol start="7">\n<li>Arch’s GRUB settings loaded on next boot, which had options for Windows and Arch Linux.(no Zorin OS here)</li>\n<li>Then I went ahead and booted into Arch to run a <code class="language-text">grub-mkconfig -o /boot/grub/grub.cfg</code>, because it didn’t know about Zorin OS.</li>\n<li>After I rebooted the sys, Zorin’s GRUB config greeted me. WTH? It didn’t have Arch.</li>\n<li>Then I tried running the same <code class="language-text">grub-mkconfig -o /boot/grub/grub.cfg</code> in Zorin OS.</li>\n<li>I got options for Arch then, but they didn’t work (why? I don’t know).</li>\n<li>I decided I NEED my Arch before anything else!</li>\n<li>I went ahead and fired off a Live USB.</li>\n</ol>\n<h2>SOLUTION</h2>\n<ul>\n<li>re-formatted the /dev/sda1 (EFI) partition.</li>\n<li><code class="language-text">arch-chroot</code>ed into my Arch installation and force-reinstalled all my arch packages by my previous post.(to get linux <code class="language-text">img</code>s in /boot). I could’ve done it by reinstalling just the firmware too, as <Namarggon> on #archlinux (IRC) suggested.</li>\n<li>ran grub-install and grub-mkconfig commands from my GitHub gist. (ARCH COMMANDS)</li>\n<li>ran genfstab command from my GitHub gist. (kudos to <GreyShade> and <iovec> for helping me out on this one!)</li>\n</ul>\n<p align=\'center\'> Hola! I\'m back with my Arch Linux and Zorin.</p>\n<blockquote>\n<p>Now I’m left with putting in some effort to get my Windows 10 back.</p>\n</blockquote>\n<p align=\'center\'> <font size=3> Stay safe and make the internet a healthier place! </font></p>',htmlAst:{type:"root",children:[{type:"element",tagName:"p",properties:{align:"center"},children:[{type:"element",tagName:"img",properties:{src:"",alt:"Arch"},children:[]},{type:"element",tagName:"br",properties:{},children:[]},{type:"text",value:"\n"},{type:"element",tagName:"font",properties:{size:2},children:[{type:"text",value:"Arch"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"blockquote",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{align:"center"},children:[{type:"element",tagName:"b",properties:{},children:[{type:"text",value:"Arching it out "}]}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"ol",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"So I had a happy system with Arch Linux, until I needed Windows 10 for some Windows development."}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Then I installed Windows 10 UEFI with Rufus."}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Then I had a happy system with Arch Linux and Windows 10."}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Then I needed a ubuntu based OS for some testing puposes. I decided to triple boot."}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"I went for Zorin OS 12.4 CORE, it’s a beautiful distro, you must check it out!"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"I simply installed it on a separate ext4 partition at the end of my HDD (using that "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"something else"}]},{type:"text",value:" option)"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"blockquote",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"it "},{type:"element",tagName:"em",properties:{},children:[{type:"text",value:"might"}]},{type:"text",value:" have did something to my prior GRUB config of Arch Linux."}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"ol",properties:{start:7},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Arch’s GRUB settings loaded on next boot, which had options for Windows and Arch Linux.(no Zorin OS here)"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Then I went ahead and booted into Arch to run a "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"grub-mkconfig -o /boot/grub/grub.cfg"}]},{type:"text",value:", because it didn’t know about Zorin OS."}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"After I rebooted the sys, Zorin’s GRUB config greeted me. WTH? It didn’t have Arch."}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Then I tried running the same "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"grub-mkconfig -o /boot/grub/grub.cfg"}]},{type:"text",value:" in Zorin OS."}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"I got options for Arch then, but they didn’t work (why? I don’t know)."}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"I decided I NEED my Arch before anything else!"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"I went ahead and fired off a Live USB."}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"SOLUTION"}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"re-formatted the /dev/sda1 (EFI) partition."}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"arch-chroot"}]},{type:"text",value:"ed into my Arch installation and force-reinstalled all my arch packages by my previous post.(to get linux "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"img"}]},{type:"text",value:"s in /boot). I could’ve done it by reinstalling just the firmware too, as "},{type:"element",tagName:"namarggon",properties:{},children:[{type:"text",value:" on #archlinux (IRC) suggested."}]}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"ran grub-install and grub-mkconfig commands from my GitHub gist. (ARCH COMMANDS)"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"ran genfstab command from my GitHub gist. (kudos to "},{type:"element",tagName:"greyshade",properties:{},children:[{type:"text",value:" and "},{type:"element",tagName:"iovec",properties:{},children:[{type:"text",value:" for helping me out on this one!)"}]}]}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{align:"center"},children:[{type:"text",value:" Hola! I'm back with my Arch Linux and Zorin."}]},{type:"text",value:"\n"},{type:"element",tagName:"blockquote",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Now I’m left with putting in some effort to get my Windows 10 back."}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{align:"center"},children:[{type:"text",value:" "},{type:"element",tagName:"font",properties:{size:3},children:[{type:"text",value:" Stay safe and make the internet a healthier place! "}]}]}],data:{quirksMode:!1}},fields:{slug:"/arch/",prefix:"2019-02-03"},frontmatter:{title:"Arch from Hell 2",subTitle:"n-ary boots ahoy!",cover:null}},author:{id:"/home/brute4s99/DEV/repos/blog/content/parts/author.md absPath of file >>> MarkdownRemark",html:"<p>I’m currently learning more about programming practices and AI/ML/DL</p>"},footnote:{id:"/home/brute4s99/DEV/repos/blog/content/parts/footnote.md absPath of file >>> MarkdownRemark",html:'<ul>\n<li>based on a GatsbyJS starter by <a href="https://github.com/greglobinski">Greg Lobinski</a> |\nModded on Arch 🐧 Linux with 💙 by <a href="https://github.com/brute4s99">Piyush Aggarwal</a> |\nGatsbyJS, ReactJs, CSS inside!</li>\n</ul>'}},pathContext:{slug:"/arch/"}}}});
//# sourceMappingURL=path---arch-3e0e1711a02717efe7f5.js.map