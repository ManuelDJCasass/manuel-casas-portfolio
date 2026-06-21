const asciiArt = String.raw`
       <"""#**888888@@mc.
       <<<<<<<<<4MMMMMMMf
       <<<<<<<<<4MMMMMMMf                   .....uuueenxx.
       <<<<<<<<<4MMMMMMMf                   <<<<MMMMMMMMMM
       <<<<<<<<<4MMMMMMMf                   <<<<MMMMMMMMMM
       <<<<<<<<<4MMMMMMMf                   <<<<MMMMMMMMMM
       <<<<<<<<<4MMMMMMMf               !""#<<<<MMMMMMMMMM
!#*888888888888N@MMMMMMMf               <<<<<<<<MMMMMMMMMM
<<<<<<<~MMMMMMMMMMMMMMMMf               <<<<<<<<MMMMMMMMMM
<<<<<<<<MMMMMMMMMMMM!*@@888888888Wbmx. .<<<<<<<<MMMMMMMMMM
<<<<<<<<9MMMMMMMMMMM<<<<<<<!MMMMMMMMMM <<<<<<<<<MMMMMMMMMM
<<<<<<<<XMMMMMMMMMMM<<<<<<<!MMMMMMMMMM <<<<<<<<<MMMMMMMMMM
<<""++::XMMMMMMM@MMM<<<<<<<!MMMMMMMMMM <<<<<<<<<MMMMMMMMMM
<<<<<<<<MMMMMMMMMMMM<<<<<<<!MMMMMMMMMM <:uuiieii8MMMMMMMMM*88888Wmxx
<<<<<<<<MMMMMMMMMMMM<<<<<<<!MMMMMMMMMM8R<<<<<""RMMMMMMMMMX<<<<MMMMMM
<<<<<<<<MMMMMMMMMMMM<<<<<<<!MMMMMMMMMM<<<<<<<<<MMMMMMMMMMX<<<<MMMMMM
<!:<<<<<MMMMMMMMMMMM<<<<<<<!MMMMMMMMMM<<<<<<<<<MMMMMMMMMMX<uuiNNN8888N
<<<<<<<<MMM!MMMMMMMM<<<<<<<!MMMMMMM<""#*<<<<<<<MMMMMMMMMMX<<<<~"?#*888
<<<<<<<<MM!!>M!!?MHH<<<<<<<!MMMM!*@bu:<<<<<!!++MNN88888@MX<<<<<<<<<<<M
   ~~<<<S!!x!!<?!**"<<<<<<<!MMMM<<<<<<"?*msu:<<<<!MMMMMMM&::<<<<<<<<<M
::      "   ~<   '  <<<<<<<!MMMM<<<<<<<<<<<<<"?*md8@@@RRRMMMM<<<<<<<<M
     -             :+mN8888ed8MMM<:<<<<<<<<<<<<<<<<MMMMMMMMMMM<<<<<<<<M
  ..:::<<!!!<::.   <<<<"?*8888888888Nei:<<<<<<<<<<MMMMMMMMMMM<<<<<<<<M
!!!!!!!!!!!!!!!!!!!<<<<<<<<<<MMMMMM<?MMMf<<<<<<<<<MMMMMMMMMMk::<<<<<<M
    ~!!!!!!!!!~~   <<<<<<<<<<MMMMMM<4MMMf<<<<<<<<!MMMMMMMMMMf   ~-!:M
                   <<<<<<<<<<MMMMMM<4MMMf!!::<<<!MMMMMMMMM??!--
                ~!!::<<<<<<<<MMMMMM<4MMMk      ~!!!~~
                     ~!<::<<MMMMMM<!?!!!~
                           ~~
`

function AsciiBackground() {
  return (
    <div className="ascii-background" aria-hidden="true">
      <pre>{asciiArt}</pre>
    </div>
  )
}

export default AsciiBackground