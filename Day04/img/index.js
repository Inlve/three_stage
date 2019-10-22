const puppeteer = require('puppeteer');
const fs = require('fs');
const $ = require("puppeteer");
const base = 'https://www.biquke.com/bq/22/22993/';
puppeteer.launch({headless: true}).then(async browser => {
    const page = await browser.newPage();
    await page.goto(base);

    // 得到每个章节的连接和章节标题
    const urlList = await page.evaluate(() => {
        return Array.from($('#list>dl>dd>a')).map(el => {
            return {
                url: $(el).attr('href'),
                title: $(el).attr('title')
            };
        })
    });
    let data = JSON.stringify(urlList, null, 2);
    let write = fs.createWriteStream('url.json');
    write.write(data, 'utf-8');
    write.end();
    console.log(`获得章节信息成功,共${urlList.length}条`);

    let txtArr = [];
    for (let i = 0; i < urlList.length; i++) {
        console.log(`获取第${i + 1}章信息`);
        await page.goto(`${base}/${urlList[i].url}`);
        txtArr[i] = await page.evaluate(() => {
            return $('#content').text().trim();
        })
    }

    txtArr.forEach((item, index) => {
        // console.log(item);
        fs.writeFile(`${__dirname}/txt/${index}.txt`,item,err => {
            if(err) console.error(err);
        })
        // 打开文件
        // fs.open(`${__dirname}/txt/${index}.txt`, 'w', (err, fd) => {
        //     // 写入数据
        //     if (err) console.error(err);
        //     fs.write(fd, Buffer.from(item), 3, 6, 3, (err1, written, buffer) => {
        //         // 同步磁盘缓存
        //         if (err1) console.error(err1);
        //         fs.fsync(fd, err2 => {
        //             if (err2) console.error(err2);
        //             fs.close(fs, err3 => {
        //                 if (err3) console.error(err3);
        //                 console.log("写入成功");
        //             })
        //         })
        //     })
        // })
    });

    await browser.close();
});